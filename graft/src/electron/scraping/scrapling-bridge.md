# src/electron/scraping/scrapling-bridge.py

- send_response · function · L27-L31 — def send_response(data: dict) -> None
- send_error · function · L34-L36 — def send_error(error: str, code: str = "ERROR") -> None
- check_available · function · L39-L47 — def check_available() -> bool
- get_response_url · function · L50-L52 — def get_response_url(response: Any, requested_url: str) -> str
- normalize_allowed_hosts · function · L55-L64 — def normalize_allowed_hosts(params: dict) -> set[str]
- enforce_same_host_final_url · function · L67-L85 — def enforce_same_host_final_url( requested_url: str, response: Any, allowed_hosts: set[str] | None = None, ) -> str
- get_response_status · function · L88-L93 — def get_response_status(response: Any) -> int
- classify_response_status · function · L96-L111 — def classify_response_status(status: int) -> dict[str, Any]
- request_delay_seconds · function · L114-L120 — def request_delay_seconds(params: dict) -> float
- wait_between_requests · function · L123-L129 — def wait_between_requests(last_request_at: float | None, delay_seconds: float) -> None
- handle_status · function · L137-L143 — def handle_status(_input: dict) -> None
- handle_scrape_page · function · L146-L264 — def handle_scrape_page(params: dict) -> None
- handle_scrape_multiple · function · L267-L343 — def handle_scrape_multiple(params: dict) -> None
- handle_extract_structured · function · L346-L435 — def handle_extract_structured(params: dict) -> None
- handle_scrape_session · function · L438-L518 — def handle_scrape_session(params: dict) -> None
- main · function · L535-L558 — def main() -> None
