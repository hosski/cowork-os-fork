# resources/skills/multi-pr-review/scripts/post_comment.py

- get_pr_head_sha · function · L15-L30 — def get_pr_head_sha(repo: str, pr_number: int) -> str | None
- post_summary_comment · function · L33-L50 — def post_summary_comment(repo: str, pr_number: int, body: str) -> bool
- post_inline_review · function · L53-L133 — def post_inline_review(repo: str, pr_number: int, commit_sha: str, issues: list[dict], num_agents: int) -> bool
- filter_duplicate_issues · function · L136-L171 — def filter_duplicate_issues(issues: list[dict], existing_comments: dict) -> tuple[list[dict], int]
- format_summary_comment · function · L174-L272 — def format_summary_comment( issues: list[dict], num_agents: int, num_duplicates: int = 0, low_priority_issues: list[dict] | None = None ) -> str
- main · function · L275-L355 — def main()
