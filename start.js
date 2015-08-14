var spawn = require('child_process').spawn;
var http = require('http');

var changeOrg = function() {
  //return new Promise(function(resolve, reject) {
  //  http.request({
  //
  //  })
  //});
};

var create = spawn('bash', ['-c', './create.sh'], {
  env: process.env,
  stdio: 'inherit'
});

create.on('close', function(code) {
  if (code === 1) {
    return;
  }
});