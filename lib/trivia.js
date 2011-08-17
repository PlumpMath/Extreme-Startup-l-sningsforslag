exports.populate = function(questions) {
  questions.push({
    regexp: /which city is the Eiffel tower in/,
    answer: function (m) { return "Paris"; }
  });
  questions.push({
    regexp: /who played James Bond in the film Dr No/,
    answer: function (m) { return "Sean Connery"; }
  });
  questions.push({
    regexp: /what colour is a banana/,
    answer: function (m) { return "yellow"; }
  });
  questions.push({
    regexp: /who is the Prime Minister of Great Britain/,
    answer: function (m) { return "David Cameron"; }
  });
};