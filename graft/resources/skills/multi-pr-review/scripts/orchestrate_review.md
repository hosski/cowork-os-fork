# resources/skills/multi-pr-review/scripts/orchestrate_review.py

- load_review_prompt · function · L47-L65 — def load_review_prompt(code_health: bool = False) -> str
- fetch_existing_comments · function · L68-L108 — def fetch_existing_comments(repo: str, pr_number: int) -> dict
- Issue · class · L112-L121 — class Issue
- FileDiff · class · L125-L129 — class FileDiff
- parse_unified_diff · function · L132-L176 — def parse_unified_diff(diff_content: str) -> list[FileDiff]
- create_shuffled_orderings · function · L179-L188 — def create_shuffled_orderings(files: list[FileDiff], num_orderings: int, base_seed: int = 42) -> list[list[FileDiff]]
- build_review_prompt · function · L191-L207 — def build_review_prompt(files: list[FileDiff]) -> str
- run_sub_agent · function · L210-L301 — async def run_sub_agent( client: anthropic.AsyncAnthropic, agent_id: int, files: list[FileDiff], system_prompt: str, use_thinking: bool = True, thinking_budget: int = THINKING_BUDGET_TOKENS ) -> list[Issue]
- group_similar_issues · function · L304-L402 — async def group_similar_issues( client: anthropic.AsyncAnthropic, issues: list[Issue] ) -> list[list[int]]
- aggregate_issues · function · L405-L457 — async def aggregate_issues( client: anthropic.AsyncAnthropic, all_issues: list[list[Issue]], consensus_threshold: int = CONSENSUS_THRESHOLD, min_severity: str = MIN_SEVERITY ) -> list[dict]
- format_pr_comment · function · L460-L493 — def format_pr_comment(issues: list[dict]) -> str
- main · function · L496-L624 — async def main()
