const Page = require('./page');

class CheckoutPage extends Page {

get inputFirstName () { return $('#first-name') }
get inputLastName () { return $('#last-name') }
get inputPostalCode () { return $('#postal-code') }
get errorMsgFirstName () { return $('h3=Error: First Name is required') }
get errorMsgLastName () { return $('h3=Error: Last Name is required') }
get errorMsgPostalCode () { return $('h3=Error: Postal Code is required') }

get continue () { return $('#continue') }
get cancel () { return $('#cancel') }
get finish () { return $('#finish') }

}

module.exports = new CheckoutPage();