# AGENTS.md

This is a StartOS service-package repository — it builds a `.s9pk` for StartOS.

Develop it inside a StartOS packaging workspace created by `start-cli s9pk init-workspace`,
which provides the packaging guide and agent context one level up. If you're reading this in a
bare clone with no workspace, the full guide is at <https://docs.start9.com/packaging>.

Work this package's `TODO.md` from top to bottom. Keep `README.md` (technical reference for an AI support or administering agent) and `instructions.md` (end-user docs) in sync with your changes.

## This repo

- **`sync-server.Dockerfile` at the repo root is the one that builds; `actual/sync-server.Dockerfile` is not.** `dockerfile` in the manifest is resolved from the project root, while `workdir` only sets the build context — so the submodule supplies the sources and this copy supplies the recipe. Re-check it against upstream's on a submodule bump: it carries two fixes upstream's does not need (a throwaway git repo for the task hasher, and copying `@actual-app/web` / `@actual-app/crdt` out of `packages/` because the final stage does not have it).
