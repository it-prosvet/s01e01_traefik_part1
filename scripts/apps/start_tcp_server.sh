#/bin/sh

clear

docker run -p 3030:3030 -e PORT=3030 --rm --init itprosvet/traefik_tutorial_tcpserver:latest