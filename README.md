# Source code for Traefik tutorial

## Repository structure

* monitoring - Prometheus and Grafana configs
* scripts - scripts used to run demo apps/Traefik
* traefik - configuration files for Traefik
* apps - sample applications (Express.js web app + TCP server)

## Tools used in the video

* [Grafana](https://grafana.com/)
* [Prometheus](https://prometheus.io/)
* [Insomnia](https://insomnia.rest/)
* [Hey](https://github.com/rakyll/hey)
* [openssl](https://www.openssl.org/)
* [curl](https://curl.se/)

## Getting started

### Install prerequisites
* [Docker](https://docs.docker.com/get-docker/)
* [docker-compose](https://docs.docker.com/compose/install/)
* [Traefik](https://doc.traefik.io/traefik/getting-started/install-traefik/)

### Clone this repository
```bash
gh repo clone it-prosvet/s01e01_traefik_part1
cd traefik_tutorial_part1
```
### Setup hosts (e.g. edit /etc/hosts file)
```
127.0.0.1 grafana.local
::1       grafana.local
127.0.0.1 demo.local
::1       demo.local
```
### Run apps/demos using scripts

```bash
# Start monitoring services (Grafana + Prometheus)
# You can access grafana via http://grafana.local:8080
./scripts/apps/start_monitoring

# Stop monitoring services 
# Please note that previous data will be lost!
./scripts/apps/stop_monitoring

# start app1 on port :3001
./scripts/apps/start_app1.sh
# start app2 on port :3002
./scripts/apps/start_app2.sh
# start app3 on port :3003
./scripts/apps/start_app3.sh
# start TCP server on port :3030
./scripts/apps/start_tcp_server.sh

# Start some demo
# Note that some demos will stat necessary apps automatically. Please follow the video tutorial.
./scripts/demos/<demo_name>.sh
```