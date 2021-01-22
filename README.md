# Source code for Traefik tutorial

## Repository structure

* monitoring - Prometheus and Grafana with Traefik dashboard
* scripts - scripts used to run demos
* traefik - configuration files for demos
* webapp - sample web application

## Tools used in the video

* [Grafana](https://grafana.com/)
* [Prometheus](https://prometheus.io/)
* [Insomnia](https://insomnia.rest/)
* [Hey](https://github.com/rakyll/hey)
* [ngrok](https://ngrok.com/)

## Getting started

  Prerequisites
* Docker
* docker-compose
* node.js

1. Clone this repository
```
gh repo clone it-prosvet/s01e01_traefik_part1
```
2. Setup hosts (e.g. edit /etc/hosts file)
```
127.0.0.1 traefik.local
127.0.0.1 grafana.local
127.0.0.1 demo.local
```
3. go the the cloned directory
```
cd s01e01_traefik_part1
```
4. start Prometheus and Grafana
```
./scripts/start_monitoring
```
You can access grafana via http://grafana.local:8080

5. Run the demo web app

```bash
# starts app1 on port :3001
./scripts/start_app1.sh
# starts app2 on port :3002
./scripts/start_app1.sh
# starts app3 on port :3003
./scripts/start_app1.sh
```

6. Run some demos
```bash
./scripts/1-1-entry-points.sh
```
  
