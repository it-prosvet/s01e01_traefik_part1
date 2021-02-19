#/bin/sh

clear

docker run -p 3001:3001 -e APP_NAME=app1 -e PORT=3001 --rm --init itprosvet/traefik_tutorial_webapp:latest