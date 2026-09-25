# resources/skills/unbroker/scripts/emailer.py

- _domain · function · L49-L50 — def _domain(address: str) -> str
- smtp_settings · function · L53-L64 — def smtp_settings(env: dict | None = None) -> dict | None
- imap_settings · function · L67-L78 — def imap_settings(env: dict | None = None) -> dict | None
- available · function · L81-L82 — def available(env: dict | None = None) -> dict
- broker_addresses · function · L87-L105 — def broker_addresses(broker: dict) -> list[str]
- _split_subject_body · function · L108-L113 — def _split_subject_body(text: str) -> tuple[str, str]
- browser_send_payload · function · L116-L134 — def browser_send_payload(broker: dict, body_text: str, to: str | None = None) -> dict
- _rate_limit_path · function · L137-L138 — def _rate_limit_path() -> Path
- _respect_rate_limit · function · L141-L162 — def _respect_rate_limit(min_interval: float, sleep, now, state_path=None) -> None
- send · function · L170-L235 — def send(broker: dict, body_text: str, to: str | None = None, env: dict | None = None, _smtp_factory=None, min_interval: float = 0.0, max_retries: int = 3, _sleep=time.sleep, _now=time.time, _rate_state=None) -> dict
- _decode_part · function · L240-L248 — def _decode_part(part) -> str
- message_text · function · L251-L260 — def message_text(msg) -> str
- _broker_domains · function · L263-L276 — def _broker_domains(broker: dict) -> list[str]
- fetch_recent · function · L279-L314 — def fetch_recent(env: dict | None = None, since_days: int = 3, limit: int = 30, _imap_factory=None) -> list[dict]
- link_from_messages · function · L317-L335 — def link_from_messages(messages: list[dict], broker: dict) -> dict | None
- find_verification_link · function · L338-L342 — def find_verification_link(broker: dict, env: dict | None = None, since_days: int = 3, _imap_factory=None) -> dict | None
