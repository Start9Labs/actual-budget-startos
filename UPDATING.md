# Updating the upstream version

Actual Budget is built from a git submodule at `actual/` (tracking [`actualbudget/actual`](https://github.com/actualbudget/actual)), using `actual/sync-server.Dockerfile` from upstream. There is no pinned `dockerTag` in the manifest — the image is built fresh from whatever commit the submodule points at, so the submodule pin **is** the upstream version.

## Determining the upstream version

- **[actualbudget/actual](https://github.com/actualbudget/actual)** — latest release tag:
  ```bash
  gh release view -R actualbudget/actual --json tagName -q .tagName
  ```
  Current pin: the submodule SHA recorded in this repo. Inspect with:
  ```bash
  git submodule status actual
  ```

## Applying the bump

Bump the submodule to the new upstream tag:

```bash
cd actual && git fetch --tags && git checkout v<new version>
cd .. && git add actual
```
