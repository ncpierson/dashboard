Dashboard for Nick Pierson
---

This repository hosts the contents for https://nick.exposed. Used primarily to
generate a docker image.

# Usage

You can pull this repository as a **docker image**:

```
docker pull ncpierson/nick.exposed
```

## Deployment (to Docker Hub)

To do a version bump and deployment:

```
yarn version --patch # other options: --minor, --major
yarn deploy
```
