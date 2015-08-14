define(function() {

  return {
    "allFormat": "glob",
    "current": {},
    "datasource": "raptor",
    "includeAll": false,
    "label": "Branch",
    "multi": true,
    "multiFormat": "glob",
    "name": "branch",
    "options": [],
    "query": " SHOW TAG VALUES FROM \"measure\" WITH KEY = \"branch\"",
    "refresh": true,
    "refresh_on_load": true,
    "type": "query"
  };

});