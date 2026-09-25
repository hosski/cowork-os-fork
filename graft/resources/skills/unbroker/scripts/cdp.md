# resources/skills/unbroker/scripts/cdp.py

- default_profile · function · L36-L42 — def default_profile() -> Path
- _mac_candidates · function · L45-L52 — def _mac_candidates() -> list[str]
- _windows_candidates · function · L55-L73 — def _windows_candidates() -> list[str]
- find_browser · function · L76-L98 — def find_browser(override: str | None = None) -> str | None
- launch_command · function · L101-L110 — def launch_command(browser: str, port: int = DEFAULT_PORT, profile: Path | None = None) -> list[str]
- _http_get · function · L113-L116 — def _http_get(url: str, timeout: float) -> bytes
- endpoint_status · function · L119-L134 — def endpoint_status(port: int = DEFAULT_PORT, host: str = "127.0.0.1", timeout: float = 1.0) -> dict | None
- launch · function · L137-L159 — def launch(browser: str, port: int = DEFAULT_PORT, profile: Path | None = None) -> int
