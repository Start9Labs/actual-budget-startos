<p align="center">
  <img src="icon.svg" alt="Actual Budget Logo" width="21%">
</p>

# Actual Budget on StartOS

> Everything not listed in this document should behave the same as upstream
> Actual Budget. If a feature, setting, or behavior is not mentioned here, the
> upstream documentation is accurate and fully applicable — see the
> Documentation section of `instructions.md` for links.

[Actual Budget](https://github.com/actualbudget/actual) is a local-first personal finance app with envelope budgeting, multi-device sync, and bank import. This package runs its sync server, with the admin account created for you at install instead of through the first-run wizard.

- **Upstream repo:** <https://github.com/actualbudget/actual>
- **Wrapper repo:** <https://github.com/Start9Labs/actual-budget-startos>

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [File Models](#file-models)
- [Dependencies](#dependencies)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Actions](#actions)
- [Tasks](#tasks)
- [Health Checks](#health-checks)
- [Backups and Restore](#backups-and-restore)
- [Limitations and Differences](#limitations-and-differences)
- [Quick Reference for AI Consumers](#quick-reference-for-ai-consumers)

---

## Image and Container Runtime

The image is built here rather than pulled: upstream is vendored as a git submodule and supplies the build context, while the Dockerfile is this repo's own copy of upstream's.

| Property      | Value                                                               |
| ------------- | ------------------------------------------------------------------- |
| Image         | Built from `sync-server.Dockerfile` against the `actual/` submodule |
| Architectures | x86_64, aarch64                                                     |
| Command       | `node build/app.js` — the image's own, on a slim Node base          |

The Dockerfile is a copy rather than a reference because upstream's does not build standalone here. It seeds a throwaway git repo so upstream's task runner can hash its inputs, and it materializes `@actual-app/web` and `@actual-app/crdt` into `node_modules/` — both are workspace symlinks that dangle in the final stage, which does not carry `packages/`.

| Subcontainer         | Lifetime            | Purpose                                                 |
| -------------------- | ------------------- | ------------------------------------------------------- |
| `actual-budget-sub`  | the running service | The `primary` daemon — this is the one to `attach` to   |
| `actual-budget-init` | install only        | Runs the server long enough to create the admin account |

## Volume and Data Layout

One volume, holding everything the sync server writes.

| Volume | Mount Point | Purpose                                                               |
| ------ | ----------- | --------------------------------------------------------------------- |
| `main` | `/data`     | Budget files, user files, the server's own database, and `store.json` |

StartOS mounts the `main` volume at `/data`. The image's default root process can write it directly, so no runtime ownership step is needed.

## File Models

One model, and it holds a single value: the password this package generated for you.

| File         | Format | Modelled                | Written by              |
| ------------ | ------ | ----------------------- | ----------------------- |
| `store.json` | JSON   | Yes — `FileHelper.json` | Install, and every init |

`adminPassword` is generated once, at install, as 24 random alphanumeric characters. Later inits merge the file without touching it, so the value is stable for the life of the install and the [Get Admin Password](#actions) action can always return it. It is stored in plain text on the `main` volume and is therefore captured by backups.

**The package writes no upstream configuration.** Actual Budget keeps its settings, budgets, and accounts in its own database under `/data`, and this package neither reads nor rewrites any of it — there is no config file on disk to inspect or correct, and nothing a change you make in the web UI can be reverted by.

## Dependencies

None.

## Network Access and Interfaces

One interface, serving the whole application. Nothing is exported for dependent services.

| Interface | Id   | Type | Port | Description                     |
| --------- | ---- | ---- | ---- | ------------------------------- |
| Web UI    | `ui` | ui   | 5006 | The Actual Budget web interface |

The port is bound on the `ui-multi` MultiHost and is not masked.

## Installation and First-Run Flow

Install replaces upstream's first-run wizard, which is the one substantive difference between this package and running the sync server yourself. Nothing is asked of you during install, but the service will not start until you have collected the password afterwards.

1. **A password is generated** into `store.json`.
2. **The server is booted once** in a temporary subcontainer and the package POSTs to its `/account/bootstrap` endpoint to register the admin account with that password, then shuts it down. This is reported as an install progress phase and is bounded at five minutes; if it does not succeed, init fails and StartOS rolls the install back.
3. **A critical task is raised** pointing at Get Admin Password — see [Tasks](#tasks).

There is no ordering constraint beyond that: once the task is cleared, start the service, open the Web UI, and log in with the password.

## Actions

One action, and it exists because the password is generated rather than chosen.

### Get Admin Password

Returns the admin password for the web UI. Run it when the install task prompts, and any time afterwards to look the password up again.

- **What it changes:** nothing. It reads `store.json`.
- **Cost:** instant, and it does not interrupt the service. Runnable whether the service is running or stopped.
- **Repeat safety:** idempotent — it never rotates the password, so the value it returns is the same every time.
- **Outputs:** the password, masked and copyable. It reports `UNKNOWN` if `store.json` has no password, which should only be possible on an install whose bootstrap never completed.

Changing the password is done inside Actual Budget's own settings, and this package will not learn about it — the action keeps returning the original.

## Tasks

One task, raised at install, and it blocks the service until you clear it.

| Task               | Severity   | Raised when                                              | Cleared when    |
| ------------------ | ---------- | -------------------------------------------------------- | --------------- |
| Get Admin Password | `critical` | At install, once the admin account has been bootstrapped | The action runs |

`critical` suspends the ordinary controls, so a fresh install shows only this prompt rather than a start button. That is deliberate and is the intended install experience, not a fault: the password is not recoverable from anywhere else in the UI, so the task makes collecting it a step you cannot skip past.

## Health Checks

One check, on the primary daemon.

| Check                     | Method                 | Grace Period |
| ------------------------- | ---------------------- | ------------ |
| `primary` "Web Interface" | Port 5006 is listening | SDK default  |

It confirms the server has bound its port, not that the application is serving correctly. A failure after startup therefore means the Node process is down or crash-looping — read the service logs rather than looking for a networking fault.

## Backups and Restore

The `main` volume is copied wholesale — `sdk.Backups.ofVolumes('main')`. There is no dump step and nothing is excluded.

- **Included:** every budget, all user and server files, the server's database, and `store.json` with the admin password.
- **Restore:** complete. The admin account, its password, and every budget come back as they were, and no reconfiguration is needed. Because the password travels with the backup, the Get Admin Password action keeps working on the restored install.

## Limitations and Differences

1. **The admin password is generated, not chosen.** You cannot set it during install; collect it from the action and change it inside Actual Budget afterwards if you want a different one.
2. **The first-run wizard never appears.** The admin account already exists by the time you can open the web UI.
3. **A fresh install cannot be started until the password task is cleared**, because the task is `critical`.
4. **No riscv64 build.** x86_64 and aarch64 only.
5. **Install requires the bootstrap to succeed.** The server must come up and accept the account-creation request within five minutes, so an install on very slow storage can fail and roll back.

---

## Quick Reference for AI Consumers

```yaml
package_id: actual-budget
image: ./sync-server.Dockerfile # built against the actual/ submodule
architectures:
  - x86_64
  - aarch64
subcontainers:
  - actual-budget-sub # the running daemon
  - actual-budget-init # install only
volumes:
  main: /data
file_models:
  - store.json
startos_managed_env_vars: []
dependencies: []
interfaces:
  ui: { type: ui, port: 5006 }
actions:
  - get-admin-password
tasks:
  - { action: get-admin-password, severity: critical }
health_checks:
  - primary # the daemon's ready check, displayed "Web Interface"
```
