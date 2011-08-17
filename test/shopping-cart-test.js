var buster = require('buster');
var assert = buster.assert;
var refute = buster.refute;

var shoppingCart = require('../lib/shopping-cart');

buster.testCase("shoppingCart", {
  "should list products": function () {
    assert.match(shoppingCart.productList(), "pingviner,salt,klinkekuler");
  },
  
  "should get prices of products": function () {
    assert.equals(10, shoppingCart.priceOf("pingviner"));
  },
  
  "should put stuff in the cart": function () {
    var session = {}
    shoppingCart.putInCart(3, "pingviner", session);
    assert.isObject(session.cart);
    assert.equals(3, session.cart["pingviner"]);
    shoppingCart.putInCart(4, "pingviner", session);
    assert.equals(7, session.cart["pingviner"]);
  },
  
  "should know order total": function () {
    var session = {}
    shoppingCart.putInCart(3, "pingviner", session);
    assert.equals(30, shoppingCart.total(session));
    shoppingCart.putInCart(4, "japp", session);
    assert.equals(110, shoppingCart.total(session));
  }
  
  
});
