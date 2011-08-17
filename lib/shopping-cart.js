var _ = require('underscore');


var products = [
  {name: "pingviner", dollars: 10},
  {name: "salt", dollars: 10},
  {name: "klinkekuler", dollars: 10},
  {name: "japp", dollars: 20}
]

exports.populate = function (questions) {
  questions.push({
    regexp: /what products do you have for sale \(comma separated\)/,
    answer: function (m) { return exports.productList(); }
  });
  questions.push({
    regexp: /how many dollars does one (\w+) cost/,
    answer: function (m) { return exports.priceOf(m[1]); }
  });
  questions.push({
    regexp: /please put (\d+) (\w+) in my shopping cart/,
    answer: function (m, session) { return exports.putInCart(+m[1], m[2], session) }
  });
  questions.push({
    regexp: /what is my order total/,
    answer: function (m, session) { return exports.total(session); }
  })
};

function product(name) {
  return _.find(products, function (p) {
    return p.name == name;
  })
}

exports.productList = function (m) { return _.pluck(products, "name").join(","); }
exports.priceOf = function (name) { return product(name).dollars; }
exports.putInCart = function (num, name, session) { 
  if (!session.cart) session.cart = {};
  session.cart[name] = session.cart[name] ? session.cart[name] + num : num;
  return "ok"; 
};
exports.total = function (session) {
  if (!session.cart) return 0;
  var total = 0;
  _(session.cart).keys().forEach(function (name) {
    total = total + session.cart[name] * product(name).dollars;
  });
  return total;
}