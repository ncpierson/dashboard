#!/bin/bash

set -ex

USERNAME=ncpierson
IMAGE=nick.exposed
VERSION=`cat .version`

# Begin Functions

build () {
  docker build                 \
    --no-cache                 \
    -t $USERNAME/$IMAGE:latest \
    .
}

deploy () {
  docker tag $USERNAME/$IMAGE:latest $USERNAME/$IMAGE:$VERSION
  docker push $USERNAME/$IMAGE:latest
  docker push $USERNAME/$IMAGE:$VERSION
}

# Begin Script

COMMAND=${1}

case "$COMMAND" in
  build) build $@;;
  deploy)
    build
    deploy
    ;;
esac
