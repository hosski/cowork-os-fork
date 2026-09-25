# resources/skills/model-usage/scripts/model_usage.py

- parse_args · function · L16-L24 — def parse_args() -> argparse.Namespace
- load_json · function · L27-L54 — def load_json(args: argparse.Namespace) -> Any
- get_rows · function · L57-L74 — def get_rows(data: Any) -> list[dict[str, Any]]
- parse_iso_date · function · L77-L89 — def parse_iso_date(raw: Any) -> dt.datetime | None
- row_datetime · function · L92-L97 — def row_datetime(row: dict[str, Any], fallback_idx: int) -> tuple[dt.datetime, int]
- to_float · function · L100-L104 — def to_float(value: Any) -> float
- parse_breakdown_map · function · L107-L132 — def parse_breakdown_map(row: dict[str, Any]) -> dict[str, float]
- fallback_models_used · function · L135-L139 — def fallback_models_used(row: dict[str, Any]) -> list[str]
- summarize_current · function · L142-L184 — def summarize_current(rows: list[dict[str, Any]], forced_model: str | None) -> dict[str, Any]
- summarize_all · function · L187-L218 — def summarize_all(rows: list[dict[str, Any]]) -> dict[str, Any]
- main · function · L221-L260 — def main() -> int
