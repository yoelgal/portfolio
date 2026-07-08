# Project rules (promoted, human-readable)

- verify format: npm run format:check (prettier on index.html; exit 0 verified 2026-07-08)
- verify test: none - static single-file site, no lint/typecheck/test surface (reconciled 2026-07-08; the React/Vite app and its lint+tsc gates were removed)
- verify live: curl https://yoelgal.com returns 200 and the page carries the expected content
- deploy-platform: Vercel (vercel.json at repo root; .vercel/repo.json project 'portfolio', team yoel-gal)
- deploy-url: https://yoelgal.com (production alias, probed 200 on 2026-07-08)
- deploy-status: vercel ls portfolio
- deploy-health: https://yoelgal.com (HTTP 200 = healthy)
- safety-denylist: .env*, **/secrets/**, *.pem, *.key, id_rsa*, vercel.json, .vercel/**, .github/workflows/**, package.json, package-lock.json
- safety-gate: infra/deploy config (vercel.json, .vercel, CI workflows) and dependency/version bumps; no auth, payments, or migrations surface in this repo
- safety-scope: 10
- merge-policy: auto-on-green (no branch protection on staging/master as of 2026-07-08)
- safety-secret-leak: a committed secret is compromised - revoke and reissue the key first, then purge history; deleting the line is not enough.
- safety-gate-integrity: a red check is fixed, never silenced - do not disable a lint rule, skip or weaken a test, or lower a threshold to reach green.
- context-hygiene: the repo's standing context (CLAUDE.md + always-loaded blocks) is a per-turn tax - keep it lean, prune stale lines on each release, and rewrite instructions written for an older model rather than carrying them forward.
- supply-chain: lockfile regenerated 2026-07-08 with prettier as the only dependency; npm audit --omit=dev is 0 vulns and the CI audit step is blocking.
- safety-enforcement: hook (claude, PreToolUse bash+edit in .claude/settings.json, envelope verified 2026-07-08)
