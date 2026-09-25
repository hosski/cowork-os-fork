# resources/plugin-packs/codex-security/scripts/validate_report_format.py

- line_number · function · L34-L35 — def line_number(text: str, offset: int) -> int
- top_level_headings · function · L38-L39 — def top_level_headings(text: str) -> list[str]
- validate_required_sections · function · L42-L58 — def validate_required_sections(text: str, errors: list[str]) -> None
- finding_body · function · L61-L64 — def finding_body(text: str, finding: re.Match[str], next_finding: re.Match[str] | None) -> str
- validate_finding_metadata · function · L67-L75 — def validate_finding_metadata(body: str, line: int, errors: list[str]) -> None
- validate_finding_subsections · function · L78-L87 — def validate_finding_subsections(body: str, line: int, errors: list[str]) -> None
- validate_findings · function · L90-L109 — def validate_findings(text: str, errors: list[str]) -> None
- validate_report · function · L112-L116 — def validate_report(text: str) -> list[str]
- main · function · L119-L134 — def main() -> int
