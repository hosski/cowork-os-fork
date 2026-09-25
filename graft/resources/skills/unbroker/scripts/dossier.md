# resources/skills/unbroker/scripts/dossier.py

- now · function · L18-L19 — def now() -> str
- new_subject_id · function · L22-L25 — def new_subject_id(full_name: str = "") -> str: # Opaque id: derives NOTHING from the name, so PII never leaks into directory names, # case ids, drafts, or the audit log. full_name kept only for call compatibility.
- create · function · L28-L38 — def create(identity: dict, consent: dict, residency: str = "US", prefs: dict | None = None) -> dict
- load · function · L41-L42 — def load(subject_id: str) -> dict | None
- save · function · L45-L46 — def save(dossier: dict) -> Path
- is_authorized · function · L49-L51 — def is_authorized(dossier: dict) -> bool
- require_authorized · function · L54-L58 — def require_authorized(dossier: dict) -> None
- all_names · function · L61-L70 — def all_names(dossier: dict) -> list[str]
- all_addresses · function · L73-L82 — def all_addresses(dossier: dict) -> list[dict]
- all_locations · function · L85-L95 — def all_locations(dossier: dict) -> list[dict]
- contact_email · function · L98-L103 — def contact_email(dossier: dict) -> str | None
- select_disclosure · function · L106-L135 — def select_disclosure(dossier: dict, inputs: list[str], override_email: str | None = None) -> dict
