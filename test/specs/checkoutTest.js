const LoginPage = require('../pageobjects/login.page');
const ProductsPage = require('../pageobjects/products.page');
const CartPage = require('../pageobjects/cart.page');
const CheckoutPage = require('../pageobjects/checkout.page');

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
    
    describe('Checkout: Your Information', () => {

        describe ('Back to Cart Page', () => {

            it('Cancel Checkout', () => {
            CartPage.open()
            CartPage.checkout.waitForDisplayed();
            CartPage.checkout.waitForEnabled();
            CartPage.checkout.click();
            expect(CheckoutPage.title).toHaveText('CHECKOUT: YOUR INFORMATION');
            CheckoutPage.cancel.waitForDisplayed();
            CheckoutPage.cancel.waitForEnabled();
            CheckoutPage.cancel.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
            })
        })
    
        describe('Complete with invalid data', () => {

            it('Complete without First Name', () => {
                CartPage.open()
                CartPage.checkout.waitForDisplayed();
                CartPage.checkout.waitForEnabled();
                CartPage.checkout.click();
                expect(CheckoutPage.title).toHaveText('CHECKOUT: YOUR INFORMATION');
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
                expect(CheckoutPage.title).toHaveText('CHECKOUT: YOUR INFORMATION');
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
                expect(CheckoutPage.title).toHaveText('CHECKOUT: YOUR INFORMATION');
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

        describe ('Complete with valid data', () => {

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

            it('Products Overview Checkout', () => {
                expect(CheckoutPage.title).toHaveText('CHECKOUT: OVERVIEW');
                ProductsPage.titleBackpack.waitForDisplayed();
                ProductsPage.titleBackpack.waitForEnabled();
                expect(ProductsPage.titleBackpack).toBeDisplayed();
                ProductsPage.titleBikeLight.waitForDisplayed();
                ProductsPage.titleBikeLight.waitForEnabled();
                expect(ProductsPage.titleBikeLight).toBeDisplayed();
                CheckoutPage.summarySubtotal.waitForDisplayed();
                CheckoutPage.summarySubtotal.waitForEnabled();
                expect(CheckoutPage.summarySubtotal).toHaveTextContaining('$39.98');
                CheckoutPage.summaryTax.waitForDisplayed();
                CheckoutPage.summaryTax.waitForEnabled();
                expect(CheckoutPage.summaryTax).toHaveTextContaining('$3.20');
                CheckoutPage.summaryTotal.waitForDisplayed();
                CheckoutPage.summaryTotal.waitForEnabled();
                expect(CheckoutPage.summaryTotal).toHaveTextContaining('$43.18');

            })
        
        })

        describe ('Checkout: Complete ', () => {

            it('Success finish', () => {
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
    
})



