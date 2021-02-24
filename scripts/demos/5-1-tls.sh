#!/bin/sh

CONTAINER_ID=$(docker run -p 3001:3001 -e APP_NAME=app1 -e PORT=3001 --init -d itprosvet/traefik_tutorial_webapp:latest)
trap 'docker rm -f $CONTAINER_ID 2&>/dev/null' SIGINT SIGTERM EXIT

SCRIPT_PATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
cd $SCRIPT_PATH/../../traefik

traefik --configfile ./static/5-1-tls.yaml