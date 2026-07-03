# AGENTS.md

This is a StartOS service-package repository — it builds a `.s9pk` for StartOS.

Develop it inside a StartOS packaging workspace created by `start-cli s9pk init-workspace`,
which provides the packaging guide and agent context one level up. If you're reading this in a
bare clone with no workspace, the full guide is at <https://docs.start9.com/packaging>.

Work this package's `TODO.md` from top to bottom. Keep `README.md` (architecture, for developers and LLMs) and `instructions.md` (end-user docs) in sync with your changes.

## This repo

- **Package id is `actual-budget`.** UI-only service (Web UI on port 5006); no dependencies and no exported hosts for dependents.
- The main daemon's subcontainer is named `actual-budget-sub` (`main.ts`). On install, `startos/init/bootstrapServer.ts` spins a temporary `actual-budget-init` chain via `runUntilSuccess` — starting the sync server and POSTing to `/account/bootstrap` to create the admin account — and reports it as an install progress phase.
- The admin password is auto-generated on install and stored in `store.json`; there is no first-run wizard. Users retrieve it via the **Get Admin Password** action (posted as a critical task on install).

## Inspecting a running install

To run a command inside the service's container (read its generated config, grep app logs), use `start-cli package attach actual-budget -n actual-budget-sub -- <cmd>`. Select the subcontainer by **name** with `-n` (the name passed to `SubContainer.of` in `main.ts` — here `actual-budget-sub`) or by image with `-i`. Note: `-s/--subcontainer` matches the internal **Guid**, not the name, so passing a name to `-s` fails with "no matching subcontainers".
