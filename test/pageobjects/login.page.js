const Page = require('./page');

class LoginPage extends Page {
  
    get inputUsername () { return $('#user-name') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('#login-button') }
    get errorMsgUserPass () { return $('h3=Epic sadface: Username and password do not match any user in this service') }
    get errorMsgUsername () { return $('h3=Epic sadface: Username is required') }
    get errorMsgPassword () { return $('h3=Epic sadface: Password is required') }
    get errorMsgLocked () { return $('h3=Epic sadface: Sorry, this user has been locked out.') }
    
    open () {
        return super.open('');
    }

    submit () {
        this.btnSubmit.click()
    }
}

module.exports = new LoginPage();