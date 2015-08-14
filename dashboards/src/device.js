define(function() {

  return {
    "allFormat": "glob",
    "current": {},
    "datasource": "raptor",
    "includeAll": false,
    "label": "Device",
    "multi": true,
    "multiFormat": "glob",
    "name": "device",
    "options": [],
    "query": " SHOW TAG VALUES FROM \"measure\" WITH KEY = \"device\"",
    "refresh": true,
    "refresh_on_load": true,
    "type": "query"
  };

});