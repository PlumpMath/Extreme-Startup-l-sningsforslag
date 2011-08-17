var buster = require('buster');
var assert = buster.assert;
var refute = buster.refute;

var session = require('../lib/session');

buster.testCase("session", {
  "should require session id": function () {
    assert.exception(function () {
      session.get();
    });
  },
  
  "should get object": function () {
    assert.isObject(session.get('abcdefgh'));
  },
  
  "should get same object with same key": function () {
    var o = session.get('abcdefgh');
    o.tmp = "abcd";
    assert.match(session.get('abcdefgh'), {tmp: "abcd"});
  },
  
  "should get different objects with different key": function () {
    var o = session.get('abcdefgh');
    o.tmp = "abcd";
    refute.match(session.get('noe annet'), {tmp: "abcd"});
  },
  
  "shouldn't go bananas without file": function () {
    refute.exception(function () {
      session.load("session-doesnt-exist.json");
    });
  },
  
  "should save session": function () {
    session.get("abcdefgh").test = "hallo";
    session.save("../session-test.json");
    assert(require('path').existsSync("../session-test.json"));
  }
});
