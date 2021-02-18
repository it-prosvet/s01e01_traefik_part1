#/bin/sh

clear

docker run -p 3002:3000 -e APP_NAME=app2 --rm --init itprosvet/traefik_tutorial_webapp:latest