var fs = require('fs');
var path = require('path');
var sessions = {};

exports.get = function (id) {
  if (!id) throw new TypeError('session id required');
  if (!sessions[id]) {
    sessions[id] = {};
  }
  return sessions[id];
};

exports.load = function (filename) {
  if (path.existsSync(filename)) {
    sessions = JSON.parse(fs.readFileSync(filename, 'utf-8'));
  } else {
    sessions = {};
  }
};

exports.save = function (filename) {
  fs.writeFileSync(filename, JSON.stringify(sessions), 'utf-8');
}