# resources/skills/unbroker/scripts/autopilot.py

- cache_age_days · function · L41-L47 — def cache_age_days(now: float | None = None) -> float | None
- _now_iso · function · L50-L51 — def _now_iso() -> str
- _min_future_recheck · function · L54-L57 — def _min_future_recheck(ledger: dict, at: str) -> str | None
- _digest · function · L60-L68 — def _digest(broker_row: dict, reason: str, steps: list[str], prep: list[str] | None = None) -> dict
- request_kind · function · L71-L87 — def request_kind(dossier: dict, allowed: list[str] | None = None) -> str
- _email_lane · function · L93-L113 — def _email_lane(row: dict) -> tuple[str | None, str]
- _optout_action · function · L116-L201 — def _optout_action(row: dict, playbook: dict[str, dict], subject_id: str, dossier: dict, email_mode: str, smtp_ok: bool, confirm_first: bool) -> tuple[dict | None, dict | None]
- next_actions · function · L204-L417 — def next_actions(dossier: dict, brokers_list: list[dict], cfg: dict, ledger: dict | None = None, env: dict | None = None) -> dict
