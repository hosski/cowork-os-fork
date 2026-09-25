# resources/skills/gsap/scripts/extract-audio-data.py

- decode_audio · function · L43-L56 — def decode_audio(path: str) -> np.ndarray
- compute_band_edges · function · L59-L64 — def compute_band_edges(n_bands: int) -> np.ndarray
- compute_fft_bands · function · L67-L85 — def compute_fft_bands( windowed: np.ndarray, freq_per_bin: float, n_bins: int, band_edges: np.ndarray, n_bands: int, ) -> np.ndarray
- extract · function · L88-L163 — def extract(path: str, fps: int, n_bands: int) -> dict
- main · function · L166-L184 — def main()
