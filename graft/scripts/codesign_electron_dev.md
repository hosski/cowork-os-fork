# scripts/codesign_electron_dev.mjs

- log · function · L35-L37 — function log(msg)
- detectIdentity · function · L39-L41 — function detectIdentity(env = process.env)
- isSigningEnabled · function · L43-L48 — function isSigningEnabled(env = process.env)
- isSignatureValid · function · L50-L60 — function isSignatureValid()
- checkCurrentSignature · function · L62-L83 — function checkCurrentSignature()
- selectSigningPlan · function · L85-L124 — function selectSigningPlan(currentSig, identity, signingEnabled = false)
- main · function · L126-L176 — function main(env = process.env)
