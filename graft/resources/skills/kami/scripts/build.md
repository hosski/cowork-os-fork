# resources/skills/kami/scripts/build.py

- build_html · function · L58-L85 — def build_html(name: str, source: str, max_pages: int, src_dir: Path = TEMPLATES) -> bool
- build_slides · function · L88-L125 — def build_slides(name: str = "slides") -> bool
- build_all · function · L128-L139 — def build_all() -> int
- build_single · function · L142-L157 — def build_single(name: str) -> int
- show_fonts · function · L160-L169 — def show_fonts(pdf: Path) -> None
- sync_check · function · L179-L221 — def sync_check(verbose: bool = False) -> int
- _pdf_font_names · function · L233-L256 — def _pdf_font_names(pdf_path: Path) -> set[str]
- verify_target · function · L259-L304 — def verify_target(name: str, source: str, max_pages: int, src_dir: Path) -> list[str]
- verify_all · function · L307-L337 — def verify_all(target: str | None = None) -> int
- Finding · class · L368-L372 — class Finding
- scan_file · function · L375-L431 — def scan_file(path: Path) -> list[Finding]
- check_all · function · L434-L465 — def check_all(verbose: bool) -> int
- main · function · L470-L488 — def main(argv: list[str]) -> int
