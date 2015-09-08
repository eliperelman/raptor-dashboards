define(function() {

  return {
    "allFormat": "glob",
    "current": {},
    "datasource": "raptor",
    "includeAll": false,
    "label": "Test",
    "multi": false,
    "multiFormat": "glob",
    "name": "test",
    "options": [],
    "query": " SHOW TAG VALUES FROM /$metric/ WITH KEY = \"test\"",
    "refresh": true,
    "refresh_on_load": true,
    "type": "query"
  };

});