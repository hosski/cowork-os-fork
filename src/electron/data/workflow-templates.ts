/**
 * Workflow Templates
 *
 * Pre-configured DAG templates for common tasks.
 * Users can clone and customize, or start from scratch.
 */

export interface WorkflowTemplate {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'design' | 'code' | 'research' | 'content' | 'data' | 'devops';
  estimatedCost: number; // USD
  estimatedTime: string; // "2 hours"
  agents: TemplateAgent[];
  tags: string[];
}

export interface TemplateAgent {
  role: 'designer' | 'coder' | 'tester' | 'reviewer' | 'researcher' | 'ops';
  model: string;
  prompt: string;
  dependencies: string[]; // IDs of agents that must complete first
}

export const WORKFLOW_TEMPLATES: WorkflowTemplate[] = [
  {
    id: 'design-landing-page',
    name: 'Design Landing Page',
    description: 'Create a high-converting landing page from scratch',
    icon: '🎨',
    category: 'design',
    estimatedCost: 8,
    estimatedTime: '3-4 hours',
    agents: [
      {
        role: 'designer',
        model: 'claude-3-5-sonnet',
        prompt: `Design a landing page following these principles:
- Clear value proposition
- Strong CTA above the fold
- Social proof section
- FAQ section
- Mobile responsive

Output: HTML/CSS mockup with component breakdown`,
        dependencies: [],
      },
      {
        role: 'coder',
        model: 'claude-3-5-sonnet',
        prompt: `Convert the landing page design to production React code:
- Responsive Tailwind CSS
- Performance optimized
- Analytics integration stubs
- Accessibility (a11y) compliance

Output: React component with props for customization`,
        dependencies: ['designer'],
      },
      {
        role: 'tester',
        model: 'claude-3-haiku',
        prompt: `QA test the landing page:
- Visual regression test specs
- Mobile responsiveness (3 breakpoints)
- Link functionality
- CTA conversion funnel
- Accessibility scan (a11y)

Output: Test plan + Playwright tests`,
        dependencies: ['coder'],
      },
    ],
    tags: ['design', 'web', 'conversion', 'frontend'],
  },

  {
    id: 'build-rest-api',
    name: 'Build REST API',
    description: 'Build a fully-tested REST API with documentation',
    icon: '🔌',
    category: 'code',
    estimatedCost: 12,
    estimatedTime: '4-5 hours',
    agents: [
      {
        role: 'designer',
        model: 'claude-3-5-sonnet',
        prompt: `Design a REST API specification:
- OpenAPI 3.0 spec (endpoints, request/response schemas)
- Authentication strategy (JWT/OAuth)
- Error handling patterns
- Rate limiting strategy
- Database schema (ER diagram)

Output: openapi.yaml + schema design document`,
        dependencies: [],
      },
      {
        role: 'coder',
        model: 'claude-3-5-sonnet',
        prompt: `Implement the REST API in Express.js/TypeScript:
- All endpoints from OpenAPI spec
- Input validation (Zod/Joi)
- Error handling middleware
- Database integration (PostgreSQL/SQLite)
- Environment config management

Output: Production-ready Express app with all routes`,
        dependencies: ['designer'],
      },
      {
        role: 'tester',
        model: 'claude-3-haiku',
        prompt: `Write comprehensive tests:
- Unit tests for each route handler
- Integration tests (full request-response)
- Error case coverage (400, 401, 500, etc.)
- Load testing (1000 req/sec)
- Database transaction rollback tests

Output: Jest/Vitest test suite with >90% coverage`,
        dependencies: ['coder'],
      },
      {
        role: 'reviewer',
        model: 'claude-3-opus',
        prompt: `Code review the API implementation:
- Security audit (SQL injection, CORS, auth)
- Performance review (indexes, query optimization)
- API design best practices (REST conventions)
- Test coverage adequacy
- Documentation completeness

Output: Review comments + recommendations`,
        dependencies: ['tester'],
      },
    ],
    tags: ['backend', 'api', 'typescript', 'testing'],
  },

  {
    id: 'research-market-analysis',
    name: 'Research Market Analysis',
    description: 'Conduct competitive analysis and market sizing',
    icon: '📊',
    category: 'research',
    estimatedCost: 6,
    estimatedTime: '3-4 hours',
    agents: [
      {
        role: 'researcher',
        model: 'claude-3-5-sonnet',
        prompt: `Conduct competitive analysis:
- Identify top 5-10 competitors in the space
- Feature comparison matrix
- Pricing strategies
- Go-to-market approach analysis
- Market positioning gaps
- SWOT analysis for each competitor

Output: Competitive analysis report (markdown + charts)`,
        dependencies: [],
      },
      {
        role: 'researcher',
        model: 'claude-3-5-sonnet',
        prompt: `Estimate market size and growth:
- TAM (Total Addressable Market)
- SAM (Serviceable Addressable Market)
- SOM (Serviceable Obtainable Market)
- Market growth rate (5-year projection)
- Customer acquisition cost benchmarks
- Revenue model analysis

Output: Market sizing spreadsheet + narrative`,
        dependencies: [],
      },
      {
        role: 'coder',
        model: 'claude-3-haiku',
        prompt: `Create visualizations for the research:
- Market landscape map (2x2 matrix)
- Pricing comparison chart
- Feature comparison heatmap
- Market growth projections (line chart)
- TAM/SAM/SOM waterfall

Output: React charts + Excalidraw diagrams`,
        dependencies: ['researcher', 'researcher'],
      },
    ],
    tags: ['research', 'competitive-analysis', 'market-sizing'],
  },

  {
    id: 'write-documentation',
    name: 'Write Documentation',
    description: 'Generate comprehensive documentation',
    icon: '📖',
    category: 'content',
    estimatedCost: 5,
    estimatedTime: '2-3 hours',
    agents: [
      {
        role: 'coder',
        model: 'claude-3-5-sonnet',
        prompt: `Extract and document the codebase:
- README.md (installation, quick start)
- Architecture.md (system design overview)
- API.md (endpoint documentation)
- Contributing.md (dev setup, PR process)
- CHANGELOG.md (version history)

Output: Markdown files ready for publishing`,
        dependencies: [],
      },
      {
        role: 'reviewer',
        model: 'claude-3-haiku',
        prompt: `Review documentation for:
- Clarity and completeness
- Code examples accuracy
- Audience appropriateness
- SEO (for web docs)
- Consistency with code

Output: Feedback + revised docs`,
        dependencies: ['coder'],
      },
    ],
    tags: ['documentation', 'writing', 'onboarding'],
  },

  {
    id: 'setup-ci-cd',
    name: 'Setup CI/CD Pipeline',
    description: 'Configure GitHub Actions + deployment automation',
    icon: '⚙️',
    category: 'devops',
    estimatedCost: 4,
    estimatedTime: '2-3 hours',
    agents: [
      {
        role: 'ops',
        model: 'claude-3-5-sonnet',
        prompt: `Design CI/CD pipeline:
- Lint + format checks (ESLint, Prettier)
- Unit test execution
- Integration test execution
- Build artifact creation
- Deployment strategy (staging → production)
- Rollback procedure

Output: GitHub Actions workflow specs`,
        dependencies: [],
      },
      {
        role: 'coder',
        model: 'claude-3-5-sonnet',
        prompt: `Implement GitHub Actions workflows:
- .github/workflows/lint.yml (ESLint, Prettier)
- .github/workflows/test.yml (Jest, integration tests)
- .github/workflows/build.yml (Docker, artifact upload)
- .github/workflows/deploy.yml (staging + prod)
- Secrets management (API keys, tokens)

Output: YAML workflow files + instructions`,
        dependencies: ['ops'],
      },
    ],
    tags: ['devops', 'ci-cd', 'github-actions', 'deployment'],
  },
];

/**
 * Get template by ID
 */
export function getTemplate(id: string): WorkflowTemplate | undefined {
  return WORKFLOW_TEMPLATES.find((t) => t.id === id);
}

/**
 * Get templates by category
 */
export function getTemplatesByCategory(category: WorkflowTemplate['category']): WorkflowTemplate[] {
  return WORKFLOW_TEMPLATES.filter((t) => t.category === category);
}

/**
 * Convert template to DAG spec for execution
 */
export function templateToDAG(template: WorkflowTemplate) {
  const nodes = template.agents.map((agent, idx) => ({
    id: `${template.id}-${agent.role}-${idx}`,
    role: agent.role,
    model: agent.model,
    prompt: agent.prompt,
    dependencies: agent.dependencies.map(
      (dep) => `${template.id}-${dep}-${template.agents.findIndex((a) => a.role === dep)}`
    ),
  }));

  return {
    id: `dag-${template.id}-${Date.now()}`,
    name: template.name,
    description: template.description,
    nodes,
    metadata: {
      template: template.id,
      cost: template.estimatedCost,
      time: template.estimatedTime,
    },
  };
}
