const Page = require('./page');

class CartPage extends Page {
  
    get backShopping () { return $('#continue-shopping') }
    get checkout () { return $('#checkout') }

    open () {
        return super.open('cart.html');
    }

}

module.exports = new CartPage();