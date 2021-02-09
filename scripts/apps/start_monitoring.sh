#/bin/sh

SCRIPT_PATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
cd $SCRIPT_PATH/../../monitoring

docker-compose up -d

echo "Please open http://grafana.local:8080 in your browser"
