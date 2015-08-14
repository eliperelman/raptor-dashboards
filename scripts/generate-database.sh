#!/usr/bin/env bash

DATABASE=$1

echo "Generating database..."

while [[ -n $(/opt/influxdb/influx -execute "create database $DATABASE") ]]; do
  sleep 1
done