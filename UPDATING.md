# Updating the upstream version

Actual Budget is built from a git submodule at `actual/` (tracking [`actualbudget/actual`](https://github.com/actualbudget/actual)), which supplies the build context; the recipe is this repo's own `sync-server.Dockerfile` at the root, a modified copy of upstream's. There is no pinned `dockerTag` in the manifest — the image is built fresh from whatever commit the submodule points at, so the submodule pin **is** the upstream version.

## Determining the upstream version

- **[actualbudget/actual](https://github.com/actualbudget/actual)** — inspect tags and stable releases rather than relying on GitHub's Latest badge:
  ```bash
  gh api 'repos/actualbudget/actual/tags?per_page=100' --jq '.[].name'
  gh api 'repos/actualbudget/actual/releases?per_page=100' --jq '.[] | select(.draft == false and .prerelease == false) | .tag_name'
  ```
  Pick the highest stable released version and confirm its source tag resolves with `git -C actual ls-remote --tags origin 'refs/tags/v<new version>'`. Skip prereleases. Actual uses year.month.patch CalVer, with the patch counter starting at zero; preserve every component in the StartOS version.
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

Compare the root `sync-server.Dockerfile` with upstream's recipe for build changes, keeping the package-specific fixes described in `README.md` § Image and Container Runtime.
