# resources/skills/trading-foundation/tests/test_trading_foundation.py

- _write_ohlcv_csv · function · L14-L36 — def _write_ohlcv_csv(path: Path, closes, timestamp_offset_ms: int = 0) -> None
- TradingFoundationCliTests · class · L39-L286 — class TradingFoundationCliTests(unittest.TestCase)
- _run_cli · method · L41-L48 — def _run_cli(cls, args, expect_success: bool = True)
- _build_series · method · L51-L53 — def _build_series(cls, n=240)
- _make_dataset · method · L55-L64 — def _make_dataset( self, directory: Path, name: str, multiplier: float = 1.0, phase: float = 0.0, timestamp_offset_ms: int = 0 )
- test_execute_risk_blocks_and_report_includes_fill_telemetry · method · L66-L96 — def test_execute_risk_blocks_and_report_includes_fill_telemetry(self)
- test_execute_invalid_amount_is_blocked · method · L98-L120 — def test_execute_invalid_amount_is_blocked(self)
- test_statarb_requires_secondary_data · method · L122-L140 — def test_statarb_requires_secondary_data(self)
- test_statarb_output_contains_pair_metadata · method · L142-L172 — def test_statarb_output_contains_pair_metadata(self)
- test_human_prompt_without_mode_defaults_to_portfolio_run · method · L174-L184 — def test_human_prompt_without_mode_defaults_to_portfolio_run(self)
- test_human_prompt_statarb_mode_parses_pair_csv · method · L186-L195 — def test_human_prompt_statarb_mode_parses_pair_csv(self)
- test_statarb_tolerates_timestamp_skew · method · L197-L220 — def test_statarb_tolerates_timestamp_skew(self)
- test_statarb_handles_negative_spread_domain · method · L222-L250 — def test_statarb_handles_negative_spread_domain(self)
- test_backtest_includes_portfolio_risk_controls · method · L252-L286 — def test_backtest_includes_portfolio_risk_controls(self)
