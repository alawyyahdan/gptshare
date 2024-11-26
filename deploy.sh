#!/bin/bash

set -e

docker compose pull

docker compose up -d

docker images | grep alawyyahdan | grep none | awk '{print \$3}' | xargs docker rmi > /dev/null 2>&1
docker images | grep dairoot | grep none | awk '{print \$3}' | xargs docker rmi > /dev/null 2>&1
