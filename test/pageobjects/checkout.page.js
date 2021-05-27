const Page = require('./page');

class CheckoutPage extends Page {

get inputFirstName () { return $('#first-name') }
get inputLastName () { return $('#last-name') }
get inputPostalCode () { return $('#postal-code') }
get errorMsgFirstName () { return $('h3=Error: First Name is required') }
get errorMsgLastName () { return $('h3=Error: Last Name is required') }
get errorMsgPostalCode () { return $('h3=Error: Postal Code is required') }

get summarySubtotal () { return $('.summary_subtotal_label') }
get summaryTax () { return $('.summary_tax_label') }
get summaryTotal () { return $('.summary_total_label') }

get title () { return $('.title') }
get continue () { return $('#continue') }
get cancel () { return $('#cancel') }
get finish () { return $('#finish') }
get backToProducts () { return $('#back-to-products') }

get completeHeader () { return $('.complete-header') }
get completeText () { return $('.complete-text') }
get completeImg () { return $('.pony_express') }

}

module.exports = new CheckoutPage();