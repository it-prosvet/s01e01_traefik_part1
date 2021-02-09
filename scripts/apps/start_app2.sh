#/bin/sh

SCRIPT_PATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
cd $SCRIPT_PATH/../../

clear

APP_NAME=app2 PORT=3002 node ./apps/webapp/server.js