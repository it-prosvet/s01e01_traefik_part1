#/bin/sh

clear

docker run -p 3002:3000 -e APP_NAME=app2 --rm --init ghcr.io/it-prosvet/s01e01_traefik_webapp:latest