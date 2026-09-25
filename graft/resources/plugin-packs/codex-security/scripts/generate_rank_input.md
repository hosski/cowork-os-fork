# resources/plugin-packs/codex-security/scripts/generate_rank_input.py

- parse_args · function · L148-L208 — def parse_args() -> argparse.Namespace
- is_binary_sample · function · L211-L212 — def is_binary_sample(data: bytes) -> bool
- preview_for · function · L215-L226 — def preview_for(path: Path, preview_bytes: int) -> tuple[str, bool]
- path_is_excluded · function · L229-L236 — def path_is_excluded(path: Path) -> bool
- resolve_scope · function · L239-L251 — def resolve_scope(repo: Path, scope: str) -> Path
- write_rows · function · L254-L259 — def write_rows(output: Path, rows: list[tuple[str, str, str]], headers: list[str]) -> None
- make_repo_rank_input · function · L262-L292 — def make_repo_rank_input(args: argparse.Namespace) -> None
- run_git_changed_paths · function · L295-L318 — def run_git_changed_paths(repo: Path, diff_args: list[str]) -> list[Path]
- git_changed_paths · function · L321-L328 — def git_changed_paths(repo: Path, base: str, head: str, mode: str) -> list[Path]
- make_diff_rank_input · function · L331-L352 — def make_diff_rank_input(args: argparse.Namespace) -> None
- parse_bool · function · L355-L365 — def parse_bool(value: object) -> bool | None
- select_deep_review_input · function · L368-L413 — def select_deep_review_input(args: argparse.Namespace) -> None
- copy_deep_review_input · function · L416-L432 — def copy_deep_review_input(args: argparse.Namespace) -> None
- main · function · L435-L446 — def main() -> None
