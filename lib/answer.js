var _ = require('underscore');

var questions = [
  {
    regexp: /my name is (\w+). what is my name/,
    answer: function (m, session) { 
      session.name = m[1];
      return m[1]; 
    }
  }, 
  {
    regexp: /what is my name/,
    answer: function (m, session) {
      return session.name;
    }
  },
  {
    regexp: /what is (\d+) plus (\d+)/,
    answer: function (m) { return +m[1] + +m[2]; }
  },
  {
    regexp: /what is (\d+) minus (\d+)/,
    answer: function (m) { return +m[1] - +m[2]; }
  },
  {
    regexp: /what is (\d+) multiplied by (\d+)/,
    answer: function (m) { return +m[1] * +m[2]; }
  },
  {
    regexp: /what is (\d+) divided by (\d+)/,
    answer: function (m) { return +m[1] / +m[2]; }
  },
  {
    regexp: /which of the following numbers is the largest: (.+)/,
    answer: function (m) { return _.max(m[1].split(",")); }
  }
];

require('./trivia').populate(questions);
require('./shopping-cart').populate(questions);
require('./fibonnaci').populate(questions);


module.exports = function (q, session) {
  var i = 0, l = questions.length, question, m;
  for (;i < l; i++) {
    question = questions[i];
    m = q.match(question.regexp);
    if (m) {
      return question.answer(m, session);
    }
  }
}