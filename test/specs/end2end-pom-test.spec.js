import { expect as expectchai } from 'chai';
import data from '../test-data/dataSet01.json' with {type: 'json'};
import Loginpage from '../pageobjects/Loginpage.page.js';
import Shopping from '../pageobjects/Shopping.page.js';
import Checkout from '../pageobjects/Checkout.page.js';

describe('Ecommerce application', () => {
    it(`should ${data.url} be working`, async () => {
        await Loginpage.openUrl(data.url);
        await Loginpage.login(data.username, data.password);
        await expect(await Shopping.$banner().waitForDisplayed())
        .withContext(`Expect ${Shopping.Menus.page1} be opened`).toBe(true);
    });
    it(`should ${Shopping.Menus.page1} be working while adding ${data.products}`, async () => {
        await expect(browser).toHaveUrl(expect.stringContaining('angularpractice'));
        await Shopping.addProductToCart(data.products);
        await Shopping.checkout();
        await expect(await Checkout.$checkoutPage().waitForDisplayed())
        .withContext(`Expect ${Checkout.Menus.page2} be opened`).toBe(true);
    });
    it(`should ${Checkout.Menus.page2} be working`, async () => {
        const acctualAmount = await Checkout.calculateTotalAmount();
        const expectedPrice = await Checkout.getExpectedAmount();
        expectchai(expectedPrice).to.eql(acctualAmount);
        await Checkout.submitOrder();
        await Checkout.selectCountry();
    });

    it(`should message be ${Checkout.Msg.msg1}`, async () => {
        const msg = Checkout.$msg();
        await expect(await msg.isDisplayed())
        .withContext(`Expected ${Checkout.Msg.msg1} message`).toBeTruthy();
        expectchai(await msg.getText()).to.contain(data.success_msg);
    });
});