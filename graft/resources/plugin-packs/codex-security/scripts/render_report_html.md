# resources/plugin-packs/codex-security/scripts/render_report_html.py

- slugify · function · L16-L20 — def slugify(text: str) -> str
- sanitize_href · function · L23-L29 — def sanitize_href(href: str) -> str
- inline_markdown · function · L32-L42 — def inline_markdown(text: str) -> str
- replace_link · function · L33-L36 — def replace_link(match: re.Match[str]) -> str
- format_table_cell · function · L45-L56 — def format_table_cell(cell: str, row: list[str], index: int, header: list[str]) -> str
- render_table · function · L59-L85 — def render_table(lines: list[str]) -> str
- render_markdown · function · L88-L151 — def render_markdown(markdown: str) -> tuple[str, list[tuple[int, str, str]]]
- read_template · function · L154-L160 — def read_template(template_path: Path) -> str
- render_page · function · L163-L175 — def render_page(title: str, markdown: str, template_path: Path = DEFAULT_TEMPLATE) -> str
- main · function · L178-L192 — def main() -> None
