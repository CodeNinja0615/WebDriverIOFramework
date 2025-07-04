// test/flows/end2end-ecommerce-flow.js
import { expect as expectchai } from "chai";
import Loginpage from "../../pageobjects/Loginpage.page.js";
import Shopping from "../../pageobjects/Shopping.page.js";
import Checkout from "../../pageobjects/Checkout.page.js";

export default function runE2ETest(data, index) {
  describe(`Ecommerce Flow Set #${index}`, () => {
    it(`should navigate to ${data.url}`, async () => {
      await Loginpage.openUrl(data.url);
      await Loginpage.login(data.username, data.password);
      await expect(await Shopping.$banner().waitForDisplayed())
        .withContext(`Expect ${Shopping.Menus.page1} be opened`)
        .toBe(true);
    });

    it(`should add products ${data.products} to cart`, async () => {
      await expect(browser).toHaveUrl(
        expect.stringContaining("angularpractice")
      );
      await Shopping.addProductToCart(data.products);
      await Shopping.checkout();
      await expect(await Checkout.$checkoutPage().waitForDisplayed())
        .withContext(`Expect ${Checkout.Menus.page2} be opened`)
        .toBe(true);
    });

    it(`should verify order total`, async () => {
      const actualAmount = await Checkout.calculateTotalAmount();
      const expectedPrice = await Checkout.getExpectedAmount();
      expectchai(expectedPrice).to.eql(actualAmount);
      await Checkout.submitOrder();
      await Checkout.selectCountry();
    });

    it(`should confirm success message`, async () => {
      const msg = Checkout.$msg();
      await expect(await msg.isDisplayed())
        .withContext(`Expected ${Checkout.Msg.msg1} message`)
        .toBeTruthy();
      expectchai(await msg.getText()).to.contain(data.success_msg);
    });
  });
}
