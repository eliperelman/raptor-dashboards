#!/usr/bin/env bash

USER=$GRAFANA_ENV_GF_SECURITY_ADMIN_USER
PASSWORD=$GRAFANA_ENV_GF_SECURITY_ADMIN_PASSWORD

DATA="{ \"name\": \"$1\", \"type\": \"$2\", \"url\": \"$3\", \"access\": \"$4\", \"basicAuth\": $5, \"isDefault\": true, \"database\": \"$1\", \"user\": \"$6\", \"password\": \"$7\" }"

curl \
  --request POST \
  -H 'Accept: application/json' \
  -H 'Content-Type: application/json' \
  -d "$DATA" \
  http://$USER:$PASSWORD@grafana:$GRAFANA_BASE_PORT/api/datasources