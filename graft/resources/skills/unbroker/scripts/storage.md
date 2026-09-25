# resources/skills/unbroker/scripts/storage.py

- locked · function · L21-L55 — def locked(target: Path, timeout: float = 10.0, stale: float = 30.0)
- _secure · function · L58-L62 — def _secure(path: Path, mode: int) -> None
- ensure_dir · function · L65-L68 — def ensure_dir(path: Path) -> Path
- _is_sensitive · function · L71-L77 — def _is_sensitive(path: Path) -> bool
- _age_path · function · L80-L81 — def _age_path(path: Path) -> Path
- _atomic_write · function · L84-L90 — def _atomic_write(path: Path, data: bytes) -> Path
- write_json · function · L93-L110 — def write_json(path: Path, obj: Any) -> Path
- read_json · function · L113-L119 — def read_json(path: Path, default: Any = None) -> Any
- append_jsonl · function · L122-L127 — def append_jsonl(path: Path, record: dict) -> Path
- read_jsonl · function · L130-L138 — def read_jsonl(path: Path) -> list[dict]
