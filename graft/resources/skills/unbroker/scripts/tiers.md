# resources/skills/unbroker/scripts/tiers.py

- select_tier · function · L17-L37 — def select_tier(broker: dict, email_mode: str = "draft_only", browser_clears_captcha: bool = False) -> str
- plan · function · L40-L89 — def plan(subject_dossier: dict, brokers_list: list[dict], cfg: dict, browser_clears_captcha: bool = False) -> list[dict]
- fanout · function · L92-L105 — def fanout(brokers_list: list[dict], batch_size: int = 5) -> dict
- batch_plan · function · L116-L198 — def batch_plan(subject_dossier: dict, brokers_list: list[dict], cfg: dict, ledger: dict | None = None, browser_clears_captcha: bool = False) -> dict
- state_of · function · L133-L134 — def state_of(bid: str) -> str
- synthesize_steps · function · L201-L228 — def synthesize_steps(r: dict) -> list[str]
- _parent_playbook · function · L231-L252 — def _parent_playbook(found_rows: list[dict]) -> list[dict]
- _batch_next · function · L255-L283 — def _batch_next(groups: dict, covered: dict) -> list[str]
