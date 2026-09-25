#!/bin/bash

##############################################################################
# CoWork OS Complete Startup Script
# 
# Starts all required services in the correct order:
# 1. Kill any existing processes
# 2. Start render queue (port 5556)
# 3. Start Viking sync cron (2 AM nightly export)
# 4. Launch CoWork OS Electron app
#
# Usage: ./scripts/startup.sh
##############################################################################

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$PROJECT_ROOT/logs"

# Create logs directory
mkdir -p "$LOG_DIR"

# Color output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

log_info() {
  echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
  echo -e "${GREEN}[✓]${NC} $1"
}

log_warn() {
  echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
  echo -e "${RED}[ERROR]${NC} $1"
}

##############################################################################
# Step 1: Kill any existing processes
##############################################################################
log_info "Cleaning up existing processes..."

pkill -f "Render Queue" 2>/dev/null || true
pkill -f "start-render-queue" 2>/dev/null || true
sleep 1

killall -9 Electron node npm 2>/dev/null || true
sleep 2

log_success "All processes cleaned"

##############################################################################
# Step 2: Start Render Queue (port 5556)
##############################################################################
log_info "Starting Render Queue on port 5556..."

node "$PROJECT_ROOT/scripts/start-render-queue.js" > "$LOG_DIR/render-queue.log" 2>&1 &
RENDER_QUEUE_PID=$!

# Wait for render queue to be ready
sleep 2
if curl -s http://localhost:5556/health > /dev/null 2>&1; then
  log_success "Render Queue started (PID: $RENDER_QUEUE_PID)"
else
  log_error "Render Queue failed to start"
  exit 1
fi

##############################################################################
# Step 3: Configure executor credentials (if not already done)
##############################################################################
log_info "Configuring executor credentials..."

if [ ! -f "$PROJECT_ROOT/executor-config.json" ]; then
  log_warn "executor-config.json not found, creating template"
  node "$PROJECT_ROOT/scripts/setup-executor-credentials.js" > "$LOG_DIR/credentials-setup.log" 2>&1 || true
  log_success "Credentials configured"
else
  log_success "Credentials already configured"
fi

##############################################################################
# Step 4: Setup Viking cron (if not already done)
##############################################################################
log_info "Setting up OpenViking sync cron..."

if ! launchctl list com.cowork.viking-sync 2>/dev/null | grep -q "com.cowork.viking-sync"; then
  node "$PROJECT_ROOT/scripts/setup-viking-cron.js" > "$LOG_DIR/viking-setup.log" 2>&1 || true
  log_success "Viking cron scheduled (2 AM nightly)"
else
  log_success "Viking cron already scheduled"
fi

##############################################################################
# Step 5: Launch CoWork OS Electron App
##############################################################################
log_info "Launching CoWork OS..."

cd "$PROJECT_ROOT"
VITE_CONFIG_NATIVE_IGNORE_WARNING=true npm run dev:start > "$LOG_DIR/cowork-os.log" 2>&1 &
APP_PID=$!

# Wait a few seconds for app to start
sleep 5

if ps -p $APP_PID > /dev/null 2>&1; then
  log_success "CoWork OS launched (PID: $APP_PID)"
else
  log_error "CoWork OS failed to launch"
  log_error "Check $LOG_DIR/cowork-os.log for details"
  exit 1
fi

##############################################################################
# Summary
##############################################################################
echo ""
log_success "=========================================="
log_success "CoWork OS Startup Complete!"
log_success "=========================================="
echo ""
echo "Services running:"
echo "  • Render Queue:    http://localhost:5556"
echo "  • CoWork OS App:   $(pgrep -f 'Electron.app.*cowork' > /dev/null && echo 'Ready' || echo 'Check logs')"
echo "  • Viking Sync:     2 AM nightly (launchd)"
echo ""
echo "Logs available in: $LOG_DIR/"
echo "  • render-queue.log"
echo "  • cowork-os.log"
echo "  • credentials-setup.log (if created)"
echo "  • viking-setup.log (if created)"
echo ""
echo "Next steps:"
echo "  1. Wait for CoWork OS window to open (~30 seconds)"
echo "  2. Click 'Workflows' in sidebar"
echo "  3. Choose 'Video Production' or 'Trading Bot'"
echo "  4. Watch real-time DAG execution"
echo ""
