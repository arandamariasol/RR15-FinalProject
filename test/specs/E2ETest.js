const LoginPage = require('../pageobjects/login.page');
const ProductsPage = require('../pageobjects/products.page');
const CartPage = require('../pageobjects/cart.page');
const CheckoutPage = require('../pageobjects/checkout.page');

describe('Login with valid data', () => {
        
    it('Succes Login', () => {
        LoginPage.open()
        LoginPage.inputUsername.waitForDisplayed();
        LoginPage.inputUsername.waitForEnabled();
        LoginPage.inputUsername.setValue('standard_user')
        LoginPage.inputPassword.waitForDisplayed();
        LoginPage.inputPassword.waitForEnabled();
        LoginPage.inputPassword.setValue('secret_sauce')
        LoginPage.submit()
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
})

describe('Add products to Cart', () => {
    
    it('Add Bolt T Shirt to Cart', () => {
        ProductsPage.open()
        ProductsPage.addToCartBoltTShirt.waitForDisplayed();
        ProductsPage.addToCartBoltTShirt.waitForEnabled();
        ProductsPage.addToCartBoltTShirt.click();
        CartPage.open()
        expect(ProductsPage.titleBoltTShirt).toBeDisplayed();
    })

    it('Add Fleece Jacket to Cart', () => {
        ProductsPage.open()
        ProductsPage.addToCartFleeceJacket.waitForDisplayed();
        ProductsPage.addToCartFleeceJacket.waitForEnabled();
        ProductsPage.addToCartFleeceJacket.click();
        CartPage.open()
        expect(ProductsPage.titleFleeceJacket).toBeDisplayed();
    })

    it('Add Onesie to Cart', () => {
        ProductsPage.open()
        ProductsPage.addToCartOnesie.waitForDisplayed();
        ProductsPage.addToCartOnesie.waitForEnabled();
        ProductsPage.addToCartOnesie.click();
        CartPage.open()
        expect(ProductsPage.titleOnesie).toBeDisplayed();
    })
})

describe('Checkout', () => {

    describe ('Complete Checkout: Your information', () => {

        it('Valid First Name, Last Name and Postal Code', () => {
        CartPage.open()
        CartPage.checkout.waitForDisplayed();
        CartPage.checkout.waitForEnabled();
        CartPage.checkout.click();
        expect(CheckoutPage.title).toHaveText('CHECKOUT: YOUR INFORMATION');
        CheckoutPage.inputFirstName.waitForDisplayed();
        CheckoutPage.inputFirstName.waitForEnabled();
        CheckoutPage.inputFirstName.setValue('Juan')
        CheckoutPage.inputLastName.waitForDisplayed();
        CheckoutPage.inputLastName.waitForEnabled();
        CheckoutPage.inputLastName.setValue('Perez')
        CheckoutPage.inputPostalCode.waitForDisplayed();
        CheckoutPage.inputPostalCode.waitForEnabled();
        CheckoutPage.inputPostalCode.setValue('2000');
        CheckoutPage.continue.waitForDisplayed();
        CheckoutPage.continue.waitForEnabled();
        CheckoutPage.continue.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
        })
    })

    describe ('Checkout: Overview', () => {

        it('Products added Checkout', () => {
            expect(CheckoutPage.title).toHaveText('CHECKOUT: OVERVIEW');
            ProductsPage.titleBoltTShirt.waitForDisplayed();
            ProductsPage.titleBoltTShirt.waitForEnabled();
            expect(ProductsPage.titleBoltTShirt).toBeDisplayed();
            ProductsPage.titleFleeceJacket.waitForDisplayed();
            ProductsPage.titleFleeceJacket.waitForEnabled();
            expect(ProductsPage.titleFleeceJacket).toBeDisplayed();
            ProductsPage.titleOnesie.waitForDisplayed();
            ProductsPage.titleOnesie.waitForEnabled();
            expect(ProductsPage.titleOnesie).toBeDisplayed();
            CheckoutPage.summarySubtotal.waitForDisplayed();
            CheckoutPage.summarySubtotal.waitForEnabled();
            expect(CheckoutPage.summarySubtotal).toHaveTextContaining('$73.97');
            CheckoutPage.summaryTax.waitForDisplayed();
            CheckoutPage.summaryTax.waitForEnabled();
            expect(CheckoutPage.summaryTax).toHaveTextContaining('$5.92');
            CheckoutPage.summaryTotal.waitForDisplayed();
            CheckoutPage.summaryTotal.waitForEnabled();
            expect(CheckoutPage.summaryTotal).toHaveTextContaining('$79.89');
        })
    })

    describe ('Success Finish', () => {

        it('Checkout: Complete', () => {
            CheckoutPage.finish.waitForDisplayed();
            CheckoutPage.finish.waitForEnabled();
            CheckoutPage.finish.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
            expect(CheckoutPage.title).toHaveText('CHECKOUT: COMPLETE!'); 
            CheckoutPage.completeHeader.waitForDisplayed();
            CheckoutPage.completeHeader.waitForEnabled();
            expect(CheckoutPage.completeHeader).toBeDisplayed();
            CheckoutPage.completeText.waitForDisplayed();
            CheckoutPage.completeText.waitForEnabled();
            expect(CheckoutPage.completeText).toBeDisplayed();
            CheckoutPage.completeImg.waitForDisplayed();
            CheckoutPage.completeImg.waitForEnabled();
            expect(CheckoutPage.completeImg).toBeDisplayed();
        })

        it('Back Home', () => {
            CheckoutPage.backToProducts.waitForDisplayed();
            CheckoutPage.backToProducts.waitForEnabled();
            CheckoutPage.backToProducts.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        })

    })
})