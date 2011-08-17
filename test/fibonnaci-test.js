var buster = require('buster');
var assert = buster.assert;
var refute = buster.refute;

var fibonnaci = require('../lib/fibonnaci').f;

buster.testCase("fibonnaci", {
  "should know first two fibonnaci numbers": function () {
    assert.equals(fibonnaci(1), 1);
    assert.equals(fibonnaci(2), 1);
  },
  
  "should know fibonnaci of something worse": function () {
    assert.equals(fibonnaci(3), 2);
    assert.equals(fibonnaci(4), 3);
    assert.equals(fibonnaci(5), 5);
    assert.equals(fibonnaci(6), 8);
    assert.equals(fibonnaci(7), 13);
  }
});
