const Page = require('./page');

class ProductsPage extends Page {
  
    get prodBackpack () { return $('#item_4_title_link') }
    get addToCartBackpack () { return $('#add-to-cart-sauce-labs-backpack')}
    get removeToCartBackpack () { return $('#remove-sauce-labs-backpack')}
    get titleBackpack () { return $('.inventory_item_name=Sauce Labs Backpack')}

    get prodBikeLight () { return $('#item_0_title_link') }
    get addToCartBikeLight () { return $('#add-to-cart-sauce-labs-bike-light')}   
    get removeToCartBikeLight () { return $('#remove-sauce-labs-bike-light')}
    get titleBikeLight () { return $('.inventory_item_name=Sauce Labs Bike Light')}

    get prodBoltTShirt () { return $('#item_1_title_link') }
    get addToCartBoltTShirt () { return $('#add-to-cart-sauce-labs-bolt-t-shirt')}
    get removeToCartBoltTShirt () { return $('#remove-sauce-labs-bolt-t-shirt')}
    get titleBoltTShirt () { return $('.inventory_item_name=Sauce Labs Bolt T-Shirt')}

    get prodFleeceJacket () { return $('#item_5_title_link') }
    get addToCartFleeceJacket () { return $('#add-to-cart-sauce-labs-fleece-jacket')}
    get removeToCartFleeceJacket () { return $('#remove-sauce-labs-fleece-jacket')}
    get titleFleeceJacket () { return $('.inventory_item_name=Sauce Labs Fleece Jacket')}

    get prodOnesie () { return $('#item_2_title_link') }
    get addToCartOnesie () { return $('#add-to-cart-sauce-labs-onesie')}
    get removeToCartOnesie () { return $('#remove-sauce-labs-onesie')}
    get titleOnesie () { return $('.inventory_item_name=Sauce Labs Onesie')}

    get prodTaTTTShirt () { return $('#item_3_title_link') }
    get addToCartTaTTTShirt () { return $(' [name="add-to-cart-test.allthethings()-t-shirt-(red)"] ')}
    get removeToCartTaTTTShirt () { return $(' [name="remove-test.allthethings()-t-shirt-(red)"] ')}
    get titleTaTTTShirt () { return $('.inventory_item_name=Test.allTheThings() T-Shirt (Red)')}

    


    get productFilter () { return $('.product_sort_container')}

    get mainMenu () { return $('#react-burger-menu-btn')}
    get mMenuAllItems () { return $('#inventory_sidebar_link')}
    get mMenuAbout () { return $('#about_sidebar_link')}
    get mMenuLogout () { return $('#logout_sidebar_link')}   
    get mMenuReset () { return $('#reset_sidebar_link')}
    
    get cartSection () { return $('.shopping_cart_link')}

    get twitter () { return $('=Twitter')}
    get facebook () { return $('=Facebook')}
    get linkedin () { return $('=LinkedIn')}

    open () {
        return super.open('inventory.html');
    }

    submitProd () {
        this.prodBackpack.click()
    }
}

module.exports = new ProductsPage();