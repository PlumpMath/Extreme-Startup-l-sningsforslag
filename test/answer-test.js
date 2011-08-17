var buster = require('buster');
var assert = buster.assert;
var refute = buster.refute;

var answer = require('../lib/answer');

buster.testCase("answer", {
  "should answer name": function () {
    assert.equals(answer("my name is george. what is my name", {}), "george");
    assert.equals(answer("my name is jim. what is my name", {}), "jim");
  },
  
  "should store name in session": function () {
    var session = {};
    answer("my name is frank. what is my name", session);
    assert.equals(session.name, "frank");
  },
  
  "should use name from session": function () {
    assert.equals(answer("what is my name", {name: "frank"}), "frank");
  },
  
  "should do basic math": function () {
    assert.equals(answer("what is 3 plus 1"), 4);
    assert.equals(answer("what is 3 plus 10"), 13);
  },
  
  "should know largest numbers": function () {
    assert.equals(answer("which of the following numbers is the largest: 987, 27, 680, 36"), 987);
    assert.equals(answer("which of the following numbers is the largest: 85, 416, 920, 19"), 920);
  },
  
  "should answer trivia": function () {
    assert.equals(answer("who played James Bond in the film Dr No"), "Sean Connery");
  }
});
