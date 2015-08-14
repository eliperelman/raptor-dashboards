define(function() {

  return {
    "id": 0,
    "title": "",
    "originalTitle": "",
    "tags": [],
    "style": "dark",
    "timezone": "browser",
    "editable": true,
    "hideControls": false,
    "sharedCrosshair": false,
    "rows": [],
    "nav": [
      {
        "collapse": false,
        "enable": true,
        "notice": false,
        "now": false,
        "refresh_intervals": [
          "5s",
          "10s",
          "30s",
          "1m",
          "5m",
          "15m",
          "30m",
          "1h",
          "2h",
          "1d"
        ],
        "status": "Stable",
        "time_options": [
          "5m",
          "15m",
          "1h",
          "6h",
          "12h",
          "24h",
          "2d",
          "7d",
          "30d"
        ],
        "type": "timepicker"
      }
    ],
    "time": {
      "from": "now-3d",
      "to": "now"
    },
    "templating": {
      "list": []
    },
    "annotations": {
      "list": []
    },
    "schemaVersion": 6,
    "version": 1,
    "links": []
  };

});