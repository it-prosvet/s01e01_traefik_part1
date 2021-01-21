#/bin/sh

SCRIPT_PATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
cd $SCRIPT_PATH/../../

APP_NAME=app3 PORT=3003 node ./webapp/server.js