<p align="center">
  <img src="icon.svg" alt="Actual Budget Logo" width="21%">
</p>

# Actual Budget on StartOS

> **Upstream docs:** <https://actualbudget.org/docs/>
>
> Everything not listed in this document should behave the same as upstream
> Actual Budget. If a feature, setting, or behavior is not mentioned
> here, the upstream documentation is accurate and fully applicable.

Actual Budget is a local-first personal finance app with envelope budgeting, multi-device sync, and bank import support. This repository packages it for [StartOS](https://github.com/Start9Labs/start-os).

- **Upstream repo:** <https://github.com/actualbudget/actual>
- **Wrapper repo:** <https://github.com/Start9Labs/actual-budget-startos>

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Configuration Management](#configuration-management)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Actions](#actions-startos-ui)
- [Backups and Restore](#backups-and-restore)
- [Health Checks](#health-checks)
- [Dependencies](#dependencies)
- [Limitations and Differences](#limitations-and-differences)
- [What Is Unchanged from Upstream](#what-is-unchanged-from-upstream)

---

## Image and Container Runtime

| Property | Value |
|----------|-------|
| Image | Built from upstream `sync-server.Dockerfile` |
| Architectures | x86_64, aarch64 |
| Entrypoint | `node build/app.js` |

## Volume and Data Layout

| Volume | Mount Point | Purpose |
|--------|-------------|---------|
| `main` | `/data` | All persistent data (budgets, user files, server files) |

StartOS-specific files in the `main` volume:

| File | Purpose |
|------|---------|
| `store.json` | Stores the auto-generated admin password |

## Installation and First-Run Flow

On install, StartOS:

1. Auto-generates a 24-character admin password
2. Starts the server and calls the `/account/bootstrap` endpoint to register the admin account
3. Creates a **critical task** prompting you to retrieve the admin password

**No setup wizard.** The upstream first-run wizard is bypassed — the admin account is created automatically.

## Configuration Management

| StartOS-Managed | Upstream-Managed |
|-----------------|------------------|
| Admin password (auto-generated on install) | All budget settings, bank sync, categories, rules |

All application settings are managed through the Actual Budget web UI, just like upstream.

## Network Access and Interfaces

| Interface | Port | Protocol | Purpose |
|-----------|------|----------|---------|
| Web UI | 5006 | HTTP | Actual Budget web application |

## Actions (StartOS UI)

### Get Admin Password

- **Purpose:** Retrieve the auto-generated admin password
- **Availability:** Any status
- **Inputs:** None
- **Output:** Masked, copyable password

## Backups and Restore

The `main` volume is backed up, which includes all budget data and server files.

## Health Checks

| Check | Method | Messages |
|-------|--------|----------|
| Web Interface | Port listening (5006) | Ready: "The web interface is ready" |

## Dependencies

None.

## Limitations and Differences

1. **No riscv64 support** — only x86_64 and aarch64 architectures are supported
2. **Admin password is auto-generated** — you cannot choose the initial password; retrieve it via the "Get Admin Password" action

## What Is Unchanged from Upstream

- All budgeting features (envelope budgeting, transactions, categories, rules)
- Bank sync and import functionality
- Multi-device sync
- Reports and dashboards
- All web UI settings and preferences

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for build instructions and development workflow.

---

## Quick Reference for AI Consumers

```yaml
package_id: actual-budget
upstream_version: latest
image: built from upstream sync-server.Dockerfile
architectures: [x86_64, aarch64]
volumes:
  main: /data
ports:
  ui: 5006
dependencies: none
startos_managed_env_vars: []
actions:
  - get-admin-password
health_checks:
  - port_listening: 5006
backup_volumes:
  - main
```
