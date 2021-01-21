#!/bin/sh

SCRIPT_PATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
cd $SCRIPT_PATH/../../traefik

traefik --configfile ./static/3-1-routers.yaml