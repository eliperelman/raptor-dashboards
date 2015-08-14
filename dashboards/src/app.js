define(function() {

  return {
    "allFormat": "regex values",
    "current": {},
    "datasource": "raptor",
    "includeAll": true,
    "label": "Applications",
    "multi": true,
    "multiFormat": "glob",
    "name": "app",
    "options": [
      {
        "text": "All",
        "value": "()"
      }
    ],
    "query": "SHOW TAG VALUES FROM \"measure\" WITH KEY = \"context\"",
    "refresh": true,
    "refresh_on_load": true,
    "type": "query"
  };

});