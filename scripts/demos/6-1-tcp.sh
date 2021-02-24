#!/bin/sh

CONTAINER_ID=$(docker run -p 3030:3030 -e PORT=3030 --rm --init itprosvet/traefik_tutorial_tcpserver:latest)
trap 'docker rm -f $CONTAINER_ID 2&>/dev/null' SIGINT SIGTERM EXIT

SCRIPT_PATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
cd $SCRIPT_PATH/../../traefik

traefik --configfile ./static/6-1-tcp.yaml