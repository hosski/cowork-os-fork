# resources/skills/unbroker/scripts/badbool.py

- slug · function · L42-L46 — def slug(name: str) -> str: # Drop a trailing .com/.org/.info on the displayed name so "FastPeopleSearch.com" # matches the curated id "fastpeoplesearch"; keep .net/.id so distinct sites differ.
- _heading_flags · function · L49-L55 — def _heading_flags(heading: str) -> tuple[str, dict]
- _priority · function · L58-L63 — def _priority(flags: dict) -> str
- _pick · function · L66-L73 — def _pick(links: list[tuple[str, str]], hint: re.Pattern) -> str | None
- _clean · function · L76-L77 — def _clean(text: str) -> str
- _build · function · L80-L125 — def _build(name: str, flags: dict, body: str) -> dict
- parse · function · L128-L156 — def parse(markdown: str) -> list[dict]
- flush · function · L135-L141 — def flush() -> None
- fetch · function · L159-L162 — def fetch(url: str = DEFAULT_URL, timeout: int = 30) -> str
- refresh · function · L168-L177 — def refresh(cache_path: Path, url: str = DEFAULT_URL, markdown: str | None = None) -> dict
