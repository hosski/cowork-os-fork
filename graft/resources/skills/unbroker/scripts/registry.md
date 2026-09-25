# resources/skills/unbroker/scripts/registry.py

- ca_candidate_urls · function · L41-L45 — def ca_candidate_urls(today: datetime.date | None = None) -> list[str]
- portals · function · L69-L72 — def portals() -> list[dict]
- _norm · function · L86-L88 — def _norm(s: str) -> str
- slug · function · L91-L97 — def slug(name: str, website: str = "") -> str
- _domain · function · L100-L102 — def _domain(website: str) -> str
- _find_colmap · function · L105-L117 — def _find_colmap(rows: list[list[str]]) -> tuple[int, dict[str, int]]
- _get · function · L120-L121 — def _get(row: list[str], idx: int | None) -> str
- _build · function · L124-L177 — def _build(row: list[str], cm: dict[str, int], jurisdiction: str = "US-CA", has_drop: bool = True) -> dict | None
- parse · function · L180-L209 — def parse(csv_text: str, jurisdiction: str = "US-CA", has_drop: bool = True) -> list[dict]
- fetch · function · L215-L218 — def fetch(url: str = DEFAULT_URL, timeout: int = 60) -> str
- _fetch_ca_latest · function · L221-L232 — def _fetch_ca_latest() -> tuple[str, list[dict]]
- refresh · function · L235-L242 — def refresh(cache_path: Path, url: str = DEFAULT_URL, csv_text: str | None = None) -> dict
- refresh_all · function · L245-L293 — def refresh_all(cache_path: Path, fetched: dict[str, str] | None = None) -> dict
