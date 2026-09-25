# resources/skills/unbroker/scripts/ledger.py

- now · function · L56-L57 — def now() -> str
- load · function · L60-L61 — def load(subject_id: str) -> dict
- save · function · L64-L65 — def save(subject_id: str, ledger: dict) -> Path
- new_case · function · L68-L78 — def new_case(subject_id: str, broker_id: str) -> dict
- get_case · function · L81-L82 — def get_case(subject_id: str, broker_id: str) -> dict
- can_transition · function · L85-L86 — def can_transition(old: str, new: str) -> bool
- transition · function · L89-L111 — def transition(subject_id: str, broker_id: str, new_state: str, **fields) -> dict
- _plus_days · function · L118-L121 — def _plus_days(days: int, start: str | None = None) -> str
- followup_fields · function · L124-L140 — def followup_fields(new_state: str, broker: dict | None = None, dossier: dict | None = None) -> dict
- due · function · L143-L152 — def due(subject_id: str, at: str | None = None, ledger: dict | None = None) -> list[dict]
- log_disclosure · function · L155-L170 — def log_disclosure(subject_id: str, broker_id: str, fields: list[str], channel: str) -> dict
