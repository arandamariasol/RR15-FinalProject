const LoginPage = require('../pageobjects/login.page');
const ProductsPage = require('../pageobjects/products.page');

describe('Products page', () => {

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

    describe('Correct access to products description', () => {

        it('Link redirects correctly to Backpack description', () => {
            ProductsPage.open()
            ProductsPage.prodBackpack.waitForDisplayed();
            ProductsPage.prodBackpack.waitForEnabled();
            ProductsPage.prodBackpack.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4');
        })

        it('Link redirects correctly to Bike Light description', () => {
            ProductsPage.open()
            ProductsPage.prodBikeLight.waitForDisplayed();
            ProductsPage.prodBikeLight.waitForEnabled();
            ProductsPage.prodBikeLight.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=0');
        })

        it('Link redirects correctly to Bolt T-Shirt description', () => {
            ProductsPage.open()
            ProductsPage.prodBoltTShirt.waitForDisplayed();
            ProductsPage.prodBoltTShirt.waitForEnabled();
            ProductsPage.prodBoltTShirt.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=1');
        })

        it('Link redirects correctly to Fleece Jacket description', () => {
            ProductsPage.open()
            ProductsPage.prodFleeceJacket.waitForDisplayed();
            ProductsPage.prodFleeceJacket.waitForEnabled();
            ProductsPage.prodFleeceJacket.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=5');
        })

        it('Link redirects correctly to Onesie description', () => {
            ProductsPage.open()            
            ProductsPage.prodOnesie.waitForDisplayed();
            ProductsPage.prodOnesie.waitForEnabled();
            ProductsPage.prodOnesie.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=2');
        })

        it('Link redirects correctly to Test.allTheThings() T-Shirt (Red) description', () => {
            ProductsPage.open()        
            ProductsPage.prodTaTTTShirt.waitForDisplayed();
            ProductsPage.prodTaTTTShirt.waitForEnabled();
            ProductsPage.prodTaTTTShirt.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=3');
        })

    })
    
    describe('Addtocart/Remove buttons works correctly', () => {

        it('Open Product Page', () => {
            ProductsPage.open()
        })

        it('Addtocart Backpack button', () => {
            ProductsPage.addToCartBackpack.waitForDisplayed();
            ProductsPage.addToCartBackpack.waitForEnabled();
            ProductsPage.addToCartBackpack.click();
            expect(ProductsPage.removeToCartBackpack).toBeDisplayed();
        })
        it('Remove Backpack button', () => {
            ProductsPage.removeToCartBackpack.waitForDisplayed();
            ProductsPage.removeToCartBackpack.waitForEnabled();
            ProductsPage.removeToCartBackpack.click();
            expect(ProductsPage.addToCartBackpack).toBeDisplayed();
        })
        it('Addtocart Bike Light button', () => {
            ProductsPage.addToCartBikeLight.waitForDisplayed();
            ProductsPage.addToCartBikeLight.waitForEnabled();
            ProductsPage.addToCartBikeLight.click();
            expect(ProductsPage.removeToCartBikeLight).toBeDisplayed();
        })
        it('Remove Bike Light button', () => {
            ProductsPage.removeToCartBikeLight.waitForDisplayed();
            ProductsPage.removeToCartBikeLight.waitForEnabled();
            ProductsPage.removeToCartBikeLight.click();
            expect(ProductsPage.addToCartBikeLight).toBeDisplayed();
        })
        it('Addtocart Bolt T Shirt button', () => {
            ProductsPage.addToCartBoltTShirt.waitForDisplayed();
            ProductsPage.addToCartBoltTShirt.waitForEnabled();
            ProductsPage.addToCartBoltTShirt.click();
            expect(ProductsPage.removeToCartBoltTShirt).toBeDisplayed();
        })
        it('Remove Bolt T Shirt button', () => {
            ProductsPage.removeToCartBoltTShirt.waitForDisplayed();
            ProductsPage.removeToCartBoltTShirt.waitForEnabled();
            ProductsPage.removeToCartBoltTShirt.click();
            expect(ProductsPage.addToCartBoltTShirt).toBeDisplayed();
        })
        it('Addtocart Fleece Jacket button', () => {
            ProductsPage.addToCartFleeceJacket.waitForDisplayed();
            ProductsPage.addToCartFleeceJacket.waitForEnabled();
            ProductsPage.addToCartFleeceJacket.click();
            expect(ProductsPage.removeToCartFleeceJacket).toBeDisplayed();
        })
        it('Remove Fleece Jacket button', () => {
            ProductsPage.removeToCartFleeceJacket.waitForDisplayed();
            ProductsPage.removeToCartFleeceJacket.waitForEnabled();
            ProductsPage.removeToCartFleeceJacket.click();
            expect(ProductsPage.addToCartFleeceJacket).toBeDisplayed();
        })
        it('Addtocart Onesie button', () => {
            ProductsPage.addToCartOnesie.waitForDisplayed();
            ProductsPage.addToCartOnesie.waitForEnabled();
            ProductsPage.addToCartOnesie.click();
            expect(ProductsPage.removeToCartOnesie).toBeDisplayed();
        })
        it('Remove Onesie button', () => {
            ProductsPage.removeToCartOnesie.waitForDisplayed();
            ProductsPage.removeToCartOnesie.waitForEnabled();
            ProductsPage.removeToCartOnesie.click();
            expect(ProductsPage.addToCartOnesie).toBeDisplayed();
        })
        
        it('Addtocart Test.allTheThings() T-Shirt (Red) button', () => {
            ProductsPage.addToCartTaTTTShirt.waitForDisplayed();
            ProductsPage.addToCartTaTTTShirt.waitForEnabled();
            ProductsPage.addToCartTaTTTShirt.click();
            expect(ProductsPage.removeToCartTaTTTShirt).toBeDisplayed();
        })
        it('Remove Test.allTheThings() T-Shirt (Red)Backpack button', () => {
            ProductsPage.removeToCartTaTTTShirt.waitForDisplayed();
            ProductsPage.removeToCartTaTTTShirt.waitForEnabled();
            ProductsPage.removeToCartTaTTTShirt.click();
            expect(ProductsPage.addToCartTaTTTShirt).toBeDisplayed();
        })

    })

    /* ARREGLAR
    describe('Correct access to social media', () => {
    
        it('Link redirects correctly to Twitter', () => {
            ProductsPage.open()
            ProductsPage.twitter.click();
            browser.newWindow
            expect(browser).toHaveUrl('https://twitter.com/saucelabs');
        })

        it('Link redirects correctly to Facebook', () => {
            ProductsPage.open()
            ProductsPage.facebook.click();
            expect(browser).toHaveUrl('https://www.facebook.com/saucelabs');
        })

        it('Link redirects correctly to LinkedIn', () => {
            ProductsPage.open()
            ProductsPage.linkedin.click();
            expect(browser).toHaveUrl('https://www.linkedin.com/company/sauce-labs/');
        })

    })*/

    describe('Correct redirection to Cart Section', () => {

        it('Cart Logo redirects correctly to Cart Section', () => {
            ProductsPage.open()
            ProductsPage.cartSection.waitForDisplayed();
            ProductsPage.cartSection.waitForEnabled();
            ProductsPage.cartSection.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        })

    })

    describe('Main Menu', () => {

        it('All Items redirects correctly to Products Page', () => {
            ProductsPage.open()
            ProductsPage.mainMenu.waitForDisplayed();
            ProductsPage.mainMenu.waitForEnabled();
            ProductsPage.mainMenu.click();
            ProductsPage.mMenuAllItems.waitForDisplayed();
            ProductsPage.mMenuAllItems.waitForEnabled();
            ProductsPage.mMenuAllItems.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        })

        it('About redirects correctly to Information page', () => {
            ProductsPage.open()
            ProductsPage.mainMenu.waitForDisplayed();
            ProductsPage.mainMenu.waitForEnabled();
            ProductsPage.mainMenu.click();
            ProductsPage.mMenuAbout.waitForDisplayed();
            ProductsPage.mMenuAbout.waitForEnabled();
            ProductsPage.mMenuAbout.click();
            expect(browser).toHaveUrl('https://saucelabs.com/');
        })
        
        it('Logout redirects correctly to Login Page', () => {
            ProductsPage.open()
            ProductsPage.mainMenu.waitForDisplayed();
            ProductsPage.mainMenu.waitForEnabled();
            ProductsPage.mainMenu.click();
            ProductsPage.mMenuLogout.waitForDisplayed();
            ProductsPage.mMenuLogout.waitForEnabled();
            ProductsPage.mMenuLogout.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/');
        })

    })
    
    /* ARREGLAR
    describe('Correct filter', () => {

         it('Filter A-Z', () => {
            ProductsPage.open()
            ProductsPage.productFilter.click();
            ProductsPage.productFilter.selectByAttribute('value', 'az')
            expect(ProductsPage.productFilter).toHaveValue('az')
        })

        it('Filter Z-A', () => {
            ProductsPage.open()
            ProductsPage.productFilter.click();
            ProductsPage.productFilter.selectByAttribute('value', 'za')
            expect(ProductsPage.productFilter).toHaveValue('za')
        })

        it('Filter Price Low to High', () => {
            ProductsPage.open()
            ProductsPage.productFilter.click();
            ProductsPage.productFilter.selectByAttribute('value', 'lohi')
            expect(ProductsPage.productFilter).toHaveValue('lohi')
        })

        it('Filter Price High to Low', () => {
            ProductsPage.open()
            ProductsPage.productFilter.click();
            ProductsPage.productFilter.selectByAttribute('value', 'hilo')
            expect(ProductsPage.productFilter).toHaveValue('hilo')
        })
    })*/

})

