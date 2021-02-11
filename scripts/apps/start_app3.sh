#/bin/sh

clear

docker run -p 3003:3000 -e APP_NAME=app3 --rm --init ghcr.io/it-prosvet/s01e01_traefik_webapp:latest