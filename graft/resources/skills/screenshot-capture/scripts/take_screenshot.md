# resources/skills/screenshot-capture/scripts/take_screenshot.py

- timestamp · function · L16-L17 — def timestamp() -> str
- default_filename · function · L20-L23 — def default_filename(system: str) -> str
- default_directory · function · L26-L31 — def default_directory(system: str, mode: str) -> Path
- normalize_path · function · L34-L42 — def normalize_path(path: str | None, system: str, mode: str) -> Path
- run · function · L45-L46 — def run(cmd: list[str]) -> None
- run_capture · function · L49-L50 — def run_capture(cmd: list[str]) -> None
- run_osascript · function · L53-L60 — def run_osascript(script: str) -> str
- list_windows · function · L63-L99 — def list_windows(app_filter: str | None = None) -> list[dict[str, object]]
- frontmost_app_name · function · L102-L105 — def frontmost_app_name() -> str
- capture_macos · function · L108-L157 — def capture_macos(output: Path, args: argparse.Namespace) -> list[Path]
- capture_linux · function · L160-L207 — def capture_linux(output: Path, args: argparse.Namespace) -> list[Path]
- capture_windows · function · L210-L213 — def capture_windows(output: Path, args: argparse.Namespace) -> list[Path]
- parse_args · function · L216-L226 — def parse_args() -> argparse.Namespace
- main · function · L229-L245 — def main() -> int
