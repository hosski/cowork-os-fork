# resources/skills/unbroker/scripts/legal.py

- _SafeDict · class · L14-L16 — class _SafeDict(dict)
- __missing__ · method · L15-L16 — def __missing__(self, key): # leave unknown placeholders untouched
- template_path · function · L19-L20 — def template_path(name: str) -> Path
- render · function · L23-L25 — def render(template_name: str, fields: dict) -> str
- _join_listings · function · L28-L31 — def _join_listings(value) -> str
- _join_identifiers · function · L34-L38 — def _join_identifiers(value) -> str
- render_optout_email · function · L41-L47 — def render_optout_email(broker: dict, fields: dict) -> str
- render_request · function · L50-L63 — def render_request(kind: str, broker: dict, fields: dict) -> str
