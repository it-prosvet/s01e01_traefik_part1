#/bin/sh

clear

docker run -p 3003:3000 -e APP_NAME=app3 --rm --init itprosvet/traefik_tutorial_webapp:latest