# TopNetworks Sync Workflow

This repository participates in the TopNetworks multi-repo sync workflow for the shared Next.js financial platform architecture.

## Central orchestrator

Use the workspace-level orchestrator before propagating shared changes across TopNetworks properties:

- Skill: `/Users/macbookpro/GitHub/.agents/skills/topnetworks-sync-orchestrator/SKILL.md`
- Manifest: `/Users/macbookpro/GitHub/.agents/skills/topnetworks-sync-orchestrator/repositories.json`
- Runbook: `/Users/macbookpro/GitHub/.agents/skills/topnetworks-sync-orchestrator/SYNC_RUNBOOK.md`
- CLI: `/Users/macbookpro/GitHub/.agents/skills/topnetworks-sync-orchestrator/scripts/topnetworks-sync.mjs`

## Local adaptation requirements

- Brand: TopFinanzas
- Market: United Kingdom
- Locale: English (`en-GB`)
- Currency: GBP
- Canonical domain: `https://uk.topfinanzas.com`
- Production port: `3004`

Preserve UK spelling, FCA-aware language, GBP schema/currency values, UK advertiser context, representative APR conventions, and `uk.topfinanzas.com` canonical URLs when applying synchronized changes.

## Safe commands

From `/Users/macbookpro/GitHub`:

```bash
node .agents/skills/topnetworks-sync-orchestrator/scripts/topnetworks-sync.mjs status --repo topfinanzas-uk
node .agents/skills/topnetworks-sync-orchestrator/scripts/topnetworks-sync.mjs parity --repo topfinanzas-uk
node .agents/skills/topnetworks-sync-orchestrator/scripts/topnetworks-sync.mjs validate --repo topfinanzas-uk --dry-run
```

Do not commit, push, or deploy as part of a sync task unless explicitly requested.
