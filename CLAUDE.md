## How the upstream version is pulled
- Git submodule `actual/` → checkout new tag (e.g. `cd actual && git fetch --tags && git checkout v<version>`)
- Image is `dockerBuild` from the submodule (no dockerTag to update)
