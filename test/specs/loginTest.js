const LoginPage = require('../pageobjects/login.page');

describe('Login form', () => {

    describe('Login with valid data', () => {
        
        it('Should access with valid credentials (standard user)', () => {
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

        it('Should access with valid credentials (problem user)', () => {
            LoginPage.open()
            LoginPage.inputUsername.waitForDisplayed();
            LoginPage.inputUsername.waitForEnabled();
            LoginPage.inputUsername.setValue('problem_user')
            LoginPage.inputPassword.waitForDisplayed();
            LoginPage.inputPassword.waitForEnabled();
            LoginPage.inputPassword.setValue('secret_sauce')
            LoginPage.submit()
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        })

        it('Should access with valid credentials (performance glitch user)', () => {
            LoginPage.open()
            LoginPage.inputUsername.waitForDisplayed();
            LoginPage.inputUsername.waitForEnabled();
            LoginPage.inputUsername.setValue('performance_glitch_user')
            LoginPage.inputPassword.waitForDisplayed();
            LoginPage.inputPassword.waitForEnabled();
            LoginPage.inputPassword.setValue('secret_sauce')
            LoginPage.submit()
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        })

    })
    
    describe('Login with invalid data', () => {

        it('Should denny access with Locked User', () => {
            LoginPage.open()
            LoginPage.inputUsername.waitForDisplayed();
            LoginPage.inputUsername.waitForEnabled();
            LoginPage.inputUsername.setValue('locked_out_user')
            LoginPage.inputPassword.waitForDisplayed();
            LoginPage.inputPassword.waitForEnabled();
            LoginPage.inputPassword.setValue('secret_sauce')
            LoginPage.submit()
            expect(LoginPage.errorMsgLocked).toBeDisplayed()
        })

        it('Should deny access with wrong Username', () => {
            LoginPage.open()
            LoginPage.inputUsername.waitForDisplayed();
            LoginPage.inputUsername.waitForEnabled();
            LoginPage.inputUsername.setValue('sol')
            LoginPage.inputPassword.waitForDisplayed();
            LoginPage.inputPassword.waitForEnabled();
            LoginPage.inputPassword.setValue('secret_sauce')
            LoginPage.submit()
            expect(LoginPage.errorMsgUserPass).toBeDisplayed()
        })

        it('Should deny access with wrong Password', () => {
            LoginPage.open()
            LoginPage.inputUsername.waitForDisplayed();
            LoginPage.inputUsername.waitForEnabled();
            LoginPage.inputUsername.setValue('standard_user')
            LoginPage.inputPassword.waitForDisplayed();
            LoginPage.inputPassword.waitForEnabled();
            LoginPage.inputPassword.setValue('secret')
            LoginPage.submit()
            expect(LoginPage.errorMsgUserPass).toBeDisplayed()
        })
    })

    describe('Login with incomplete data', () => {

        it('Should deny access without Username', () => {
           LoginPage.open()
           LoginPage.inputUsername.waitForDisplayed();
           LoginPage.inputUsername.waitForEnabled();
           LoginPage.inputPassword.waitForDisplayed();
           LoginPage.inputPassword.waitForEnabled();
           LoginPage.inputPassword.setValue('secret_sauce')
           LoginPage.submit()
           expect(LoginPage.errorMsgUsername).toBeDisplayed()
        })

        it('Should deny access without Password', () => {
           LoginPage.open()
           LoginPage.inputUsername.waitForDisplayed();
           LoginPage.inputUsername.waitForEnabled();
           LoginPage.inputUsername.setValue('standard_user')
           LoginPage.inputPassword.waitForDisplayed();
           LoginPage.inputPassword.waitForEnabled();
           LoginPage.submit()
           expect(LoginPage.errorMsgPassword).toBeDisplayed()
       })
   })
    
})

