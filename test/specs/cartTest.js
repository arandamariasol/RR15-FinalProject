const LoginPage = require('../pageobjects/login.page');
const ProductsPage = require('../pageobjects/products.page');
const CartPage = require('../pageobjects/cart.page');

describe('Cart Page', () =>{

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
    
    describe('Select and Remove products to Cart', () => {
    
        describe('Add a product to Cart', () => {
            
            it('Add Backpack to Cart', () => {
                ProductsPage.open()
                ProductsPage.addToCartBackpack.waitForDisplayed();
                ProductsPage.addToCartBackpack.waitForEnabled();
                ProductsPage.addToCartBackpack.click();
                CartPage.open()
                expect(ProductsPage.titleBackpack).toBeDisplayed();
            })
    
            it('Add Bike Light to Cart', () => {
                ProductsPage.open()
                ProductsPage.addToCartBikeLight.waitForDisplayed();
                ProductsPage.addToCartBikeLight.waitForEnabled();
                ProductsPage.addToCartBikeLight.click();
                CartPage.open()
                expect(ProductsPage.titleBikeLight).toBeDisplayed();
            })
    
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
    
            it('Add Test.allTheThings() T-Shirt (Red) to Cart', () => {
                ProductsPage.open()
                ProductsPage.addToCartTaTTTShirt.waitForDisplayed();
                ProductsPage.addToCartTaTTTShirt.waitForEnabled();
                ProductsPage.addToCartTaTTTShirt.click();
                CartPage.open()
                expect(ProductsPage.titleTaTTTShirt).toBeDisplayed();
            })

        })
    
        describe('Remove a product to Cart', () => {
    
            it('Remove Backpack to Cart', () => {
                ProductsPage.open()
                ProductsPage.removeToCartBackpack.waitForDisplayed();
                ProductsPage.removeToCartBackpack.waitForEnabled();
                ProductsPage.removeToCartBackpack.click();
                CartPage.open()
                ProductsPage.titleBackpack.waitForDisplayed({ reverse: true })
            })

            it('Remove Bike Light to Cart', () => {
                ProductsPage.open()
                ProductsPage.removeToCartBikeLight.waitForDisplayed();
                ProductsPage.removeToCartBikeLight.waitForEnabled();
                ProductsPage.removeToCartBikeLight.click();
                CartPage.open()
                ProductsPage.titleBikeLight.waitForDisplayed({ reverse: true })
            })

            it('Remove Bolt T Shirt to Cart', () => {
                ProductsPage.open()
                ProductsPage.removeToCartBoltTShirt.waitForDisplayed();
                ProductsPage.removeToCartBoltTShirt.waitForEnabled();
                ProductsPage.removeToCartBoltTShirt.click();
                CartPage.open()
                ProductsPage.titleBoltTShirt.waitForDisplayed({ reverse: true })
            })

            it('Remove Fleece Jacket to Cart', () => {
                ProductsPage.open()
                ProductsPage.removeToCartFleeceJacket.waitForDisplayed();
                ProductsPage.removeToCartFleeceJacket.waitForEnabled();
                ProductsPage.removeToCartFleeceJacket.click();
                CartPage.open()
                ProductsPage.titleFleeceJacket.waitForDisplayed({ reverse: true })
            })

            it('Remove Onesie to Cart', () => {
                ProductsPage.open()
                ProductsPage.removeToCartOnesie.waitForDisplayed();
                ProductsPage.removeToCartOnesie.waitForEnabled();
                ProductsPage.removeToCartOnesie.click();
                CartPage.open()
                ProductsPage.titleOnesie.waitForDisplayed({ reverse: true })
            })
    
            it('Remove Test.allTheThings() T-Shirt (Red) to Cart', () => {
                ProductsPage.open()
                ProductsPage.removeToCartTaTTTShirt.waitForDisplayed();
                ProductsPage.removeToCartTaTTTShirt.waitForEnabled();
                ProductsPage.removeToCartTaTTTShirt.click();
                CartPage.open()
                ProductsPage.titleTaTTTShirt.waitForDisplayed({ reverse: true })
            })

        })
        
    })
    
    describe('Move to another Page', () => {
    
        it('Back to Product page', () => {
            CartPage.open()
            CartPage.backShopping.waitForDisplayed();
            CartPage.backShopping.waitForEnabled();
            CartPage.backShopping.click();            
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        })
        
        it('Go to Checkout Page', () => {
            CartPage.open()
            CartPage.checkout.waitForDisplayed();
            CartPage.checkout.waitForEnabled();
            CartPage.checkout.click();            
            expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
        })

    })    

})

