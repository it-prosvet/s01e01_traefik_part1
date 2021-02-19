#/bin/sh

clear

docker run -p 3003:3003 -e APP_NAME=app2 -e PORT=3003 --rm --init itprosvet/traefik_tutorial_webapp:latest
