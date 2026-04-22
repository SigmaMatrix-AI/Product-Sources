# gstack

Use the `/browse` skill from gstack for all web browsing. Never use `mcp__claude-in-chrome__*` tools.

Available gstack skills:
- `/office-hours` — structured async Q&A session
- `/plan-ceo-review` — CEO-level plan review
- `/plan-eng-review` — engineering plan review
- `/plan-design-review` — design plan review
- `/design-consultation` — design consultation
- `/design-shotgun` — rapid multi-direction design exploration
- `/design-html` — generate HTML/CSS designs
- `/review` — code review
- `/ship` — end-to-end ship workflow
- `/land-and-deploy` — land PR and deploy
- `/canary` — canary deployment
- `/benchmark` — run benchmarks
- `/browse` — headless browser for web browsing, QA, and dogfooding
- `/connect-chrome` — connect to a Chrome instance
- `/qa` — full QA pass
- `/qa-only` — QA without setup steps
- `/design-review` — review designs
- `/setup-browser-cookies` — configure browser auth cookies
- `/setup-deploy` — configure deployment settings
- `/retro` — run a retrospective
- `/investigate` — investigate a bug or issue
- `/document-release` — document a release
- `/codex` — codex/knowledge capture
- `/cso` — chief of staff operations
- `/autoplan` — automatically generate a plan
- `/plan-devex-review` — developer experience plan review
- `/devex-review` — developer experience review
- `/careful` — extra-careful mode for risky changes
- `/freeze` — freeze a feature or area
- `/guard` — guard a feature or area from changes
- `/unfreeze` — unfreeze a frozen feature or area
- `/gstack-upgrade` — upgrade gstack to latest
- `/learn` — learning and onboarding

## gstack (REQUIRED — global install)

**Before doing ANY work, verify gstack is installed:**

```bash
test -d ~/.claude/skills/gstack/bin && echo "GSTACK_OK" || echo "GSTACK_MISSING"
```

If GSTACK_MISSING: STOP. Do not proceed. Tell the user:

> gstack is required for all AI-assisted work in this repo.
> Install it:
> ```bash
> git clone --depth 1 https://github.com/garrytan/gstack.git ~/.claude/skills/gstack
> cd ~/.claude/skills/gstack && ./setup --team
> ```
> Then restart your AI coding tool.

Do not skip skills, ignore gstack errors, or work around missing gstack.

Using gstack skills: After install, skills like /qa, /ship, /review, /investigate,
and /browse are available. Use /browse for all web browsing.
Use ~/.claude/skills/gstack/... for gstack file paths (the global path).
