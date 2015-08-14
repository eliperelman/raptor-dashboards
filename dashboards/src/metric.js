define(function() {

  return function(type) {
    return {
      "allFormat": "regex values",
      "current": {},
      "datasource": "raptor",
      "includeAll": true,
      "label": "Metric",
      "multi": true,
      "multiFormat": "regex values",
      "name": "metric",
      "options": [],
      "query": "SHOW TAG VALUES FROM \"" + type + "\" WITH KEY = \"metric\"",
      "refresh": true,
      "refresh_on_load": true,
      "regex": "",
      "type": "query"
    };
  };

});