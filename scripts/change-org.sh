#!/usr/bin/env bash

ORG=$GRAFANA_ENV_GF_AUTH_ANONYMOUS_ORG_NAME
USER=$GRAFANA_ENV_GF_SECURITY_ADMIN_USER
PASSWORD=$GRAFANA_ENV_GF_SECURITY_ADMIN_PASSWORD

curl \
  --request PUT \
  -H 'Accept: application/json' \
  -H 'Content-Type: application/json' \
  -d "{ \"name\": \"$ORG\" }" \
  http://$USER:$PASSWORD@grafana:$GRAFANA_BASE_PORT/api/org