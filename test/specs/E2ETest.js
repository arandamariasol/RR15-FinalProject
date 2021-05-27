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

        it('Product 1 Checkout', () => {
            ProductsPage.titleBoltTShirt.waitForDisplayed();
            ProductsPage.titleBoltTShirt.waitForEnabled();
            expect(ProductsPage.titleBoltTShirt).toBeDisplayed();
        })

        it('Product 2 Checkout', () => {
            ProductsPage.titleFleeceJacket.waitForDisplayed();
            ProductsPage.titleFleeceJacket.waitForEnabled();
            expect(ProductsPage.titleFleeceJacket).toBeDisplayed();
        })

        it('Product 3 Checkout', () => {
            ProductsPage.titleOnesie.waitForDisplayed();
            ProductsPage.titleOnesie.waitForEnabled();
            expect(ProductsPage.titleOnesie).toBeDisplayed();
        })
    })

    describe ('Success Finish', () => {

        it('Checkout: Complete', () => {
            CheckoutPage.finish.waitForDisplayed();
            CheckoutPage.finish.waitForEnabled();
            CheckoutPage.finish.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
        })

        it('Back Home', () => {
            CheckoutPage.backToProducts.waitForDisplayed();
            CheckoutPage.backToProducts.waitForEnabled();
            CheckoutPage.backToProducts.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        })

    })
})