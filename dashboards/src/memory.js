define(function() {

  return {
    "allFormat": "glob",
    "current": {},
    "datasource": "raptor",
    "includeAll": false,
    "label": "Memory",
    "multi": true,
    "multiFormat": "glob",
    "name": "memory",
    "options": [],
    "query": " SHOW TAG VALUES FROM \"memory\" WITH KEY = \"memory\"",
    "refresh": true,
    "refresh_on_load": true,
    "type": "query"
  };

});