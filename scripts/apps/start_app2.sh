#/bin/sh

clear

docker run -p 3002:3002 -e APP_NAME=app2 -e PORT=3002 --rm --init itprosvet/traefik_tutorial_webapp:latest
