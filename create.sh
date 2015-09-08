#!/usr/bin/env bash

CWD=$( cd $(dirname $0); pwd -P )
INFLUX_CID="$CWD/.influx_cid"
GRAFANA_CID="$CWD/.grafana_cid"
DASHBOARDS="$CWD/dashboards"
SCRIPTS="$CWD/scripts"

# If we have the CID files, then the containers are created. Start them and exit
if [ -e "$GRAFANA_CID" ] || [ -e "$INFLUX_CID" ]; then
  docker start grafana
  docker start influx
  exit 1
fi

# Create the Grafana container
docker create \
  --name grafana \
  --cidfile $GRAFANA_CID \
  --env-file .env \
  -e "GF_AUTH_ANONYMOUS_ORG_NAME=$npm_package_config_grafana_organization" \
  -e "GF_SECURITY_ADMIN_USER=$npm_package_config_grafana_user" \
  -e "GF_SECURITY_ADMIN_PASSWORD=$npm_package_config_grafana_password" \
  -p $npm_package_config_grafana_port:$npm_package_config_grafana_port \
  -v $DASHBOARDS:/usr/share/grafana/public/dashboards \
  grafana/grafana:$npm_package_config_grafana_version

docker start grafana

# Create the Influx container
docker create \
  --name influx \
  --cidfile $INFLUX_CID \
  --expose 8090 \
  --expose 8099 \
  --link grafana:grafana \
  -h influx \
  -e "GRAFANA_BASE_PORT=$npm_package_config_grafana_port" \
  -p $npm_package_config_influx_ports_ui:$npm_package_config_influx_ports_ui \
  -p $npm_package_config_influx_ports_http:$npm_package_config_influx_ports_http \
  -v $SCRIPTS:/opt/scripts \
  tutum/influxdb:$npm_package_config_influx_version

docker start influx

IP_ADDRESS=$(docker inspect influx | grep IPAddress | cut -d '"' -f 4)

# Generate database
docker exec -t influx /opt/scripts/generate-database.sh $npm_package_config_influx_datasource_name

# Change organization name
docker exec -t influx /opt/scripts/change-org.sh

# Add data source
docker exec -t influx /opt/scripts/add-data-source.sh \
  $npm_package_config_influx_datasource_name \
  $npm_package_config_influx_datasource_type \
  http://$IP_ADDRESS:$npm_package_config_influx_ports_http \
  $npm_package_config_influx_datasource_access \
  $npm_package_config_influx_datasource_basicAuth \
  $npm_package_config_influx_datasource_user \
  $npm_package_config_influx_datasource_password
