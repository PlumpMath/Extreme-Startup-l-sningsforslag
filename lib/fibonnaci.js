exports.populate = function(questions) {
  questions.push({
    regexp: /what is the (\d+)\w+ number in the Fibonacci sequence/,
    answer: function (m) { return f(+m[1]); }
  });
}

function f(num) {
  if (num <= 2) return 1;
  return f(num - 1) + f(num - 2);
}

exports.f = f;