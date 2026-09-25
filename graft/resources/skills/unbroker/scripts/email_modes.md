# resources/skills/unbroker/scripts/email_modes.py

- render_draft · function · L22-L29 — def render_draft(broker: dict, fields: dict, out_dir: Path | None = None) -> Path
- render_request_draft · function · L32-L46 — def render_request_draft(broker: dict, fields: dict, kind: str = "generic", out_dir: Path | None = None) -> Path
- extract_verification_link · function · L49-L76 — def extract_verification_link(email_body: str, broker: dict | None = None) -> str | None
