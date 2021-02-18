#/bin/sh

clear

docker run -p 3001:3000 -e APP_NAME=app1 --rm --init itprosvet/traefik_tutorial_webapp:latest