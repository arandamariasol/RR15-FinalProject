const LoginPage = require('../pageobjects/login.page');
const ProductsPage = require('../pageobjects/products.page');
const CartPage = require('../pageobjects/cart.page');
const CheckoutPage = require('../pageobjects/checkout.page');
const { errorMsg } = require('../pageobjects/login.page');

describe('Checkout Page', () => {

    describe('Login with valid data', () => {

        it('Should access with valid credentials', () => {
            LoginPage.open()
            LoginPage.inputUsername.waitForDisplayed();
            LoginPage.inputUsername.waitForEnabled();
            LoginPage.inputUsername.setValue('standard_user')
            LoginPage.inputPassword.waitForDisplayed();
            LoginPage.inputPassword.waitForEnabled();
            LoginPage.inputPassword.setValue('secret_sauce')
            LoginPage.submit()
        })
        
    })
    
    describe('Add some products to Cart', () => {
    
        it('Add Backpack and Bike Light to Cart', () => {
            ProductsPage.open()
            ProductsPage.addToCartBackpack.waitForDisplayed();
            ProductsPage.addToCartBackpack.waitForEnabled();
            ProductsPage.addToCartBikeLight.waitForDisplayed();
            ProductsPage.addToCartBikeLight.waitForEnabled();
            ProductsPage.addToCartBackpack.click();
            ProductsPage.addToCartBikeLight.click();
        })
    })
    
    describe('Complete Checkout data', () => {
    
        it('Complete with valid data', () => {
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
    
        describe('Complete with invalid data', () => {

            it('Complete without First Name', () => {
                CartPage.open()
                CartPage.checkout.waitForDisplayed();
                CartPage.checkout.waitForEnabled();
                CartPage.checkout.click();
                CheckoutPage.inputLastName.waitForDisplayed();
                CheckoutPage.inputLastName.waitForEnabled();
                CheckoutPage.inputLastName.setValue('Perez')
                CheckoutPage.inputPostalCode.waitForDisplayed();
                CheckoutPage.inputPostalCode.waitForEnabled();
                CheckoutPage.inputPostalCode.setValue('2000');
                CheckoutPage.continue.waitForDisplayed();
                CheckoutPage.continue.waitForEnabled();
                CheckoutPage.continue.click();
                expect(CheckoutPage.errorMsgFirstName).toBeDisplayed()
            })
            
            it('Complete without Last Name', () => {
                CartPage.open()
                CartPage.checkout.waitForDisplayed();
                CartPage.checkout.waitForEnabled();
                CartPage.checkout.click();
                CheckoutPage.inputFirstName.waitForDisplayed();
                CheckoutPage.inputFirstName.waitForEnabled();
                CheckoutPage.inputFirstName.setValue('Juan')
                CheckoutPage.inputPostalCode.waitForDisplayed();
                CheckoutPage.inputPostalCode.waitForEnabled();
                CheckoutPage.inputPostalCode.setValue('2000');
                CheckoutPage.continue.waitForDisplayed();
                CheckoutPage.continue.waitForEnabled();
                CheckoutPage.continue.click();
                expect(CheckoutPage.errorMsgLastName).toBeDisplayed()
            }) 

            it('Complete without Postal Code', () => {
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
                CheckoutPage.continue.waitForDisplayed();
                CheckoutPage.continue.waitForEnabled();
                CheckoutPage.continue.click();
                expect(CheckoutPage.errorMsgPostalCode).toBeDisplayed()
            }) 
        })
       
    })
    
})



