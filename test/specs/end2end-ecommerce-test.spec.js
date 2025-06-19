import { expect as expectchai } from 'chai'

describe('Ecommerce application', () => {
    it('End to End Test', async () => {
        const productsList = ['iphone X', 'Nokia Edge'];
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
        await browser.maximizeWindow();
        await $('#username').setValue('rahulshettyacademy');
        const password = $('#password');
        await password.setValue('learning');
        await $('#terms').click();
        await $('#signInBtn').click();
        const banner = $('//a[text()="ProtoCommerce"]');
        await banner.waitForExist({ timeout: 5000 });
        await expect(browser).toHaveUrl(expect.stringContaining('angularpractice'));
        const cards = $$('.card.h-100');
        for (let i = 0; i < productsList.length; i++) {
            const productName = await cards.filter(async card => (await card.$('.card-title').getText()) === productsList[i])
                .map(async card => await card.$('.card-footer .btn').click());
        }
        // console.log(productName);
        // await productName[0].$('.card-footer .btn').click(); //--can also do without map
        const checkoutBtn = await $('//a[contains(text(),"Checkout")]');
        await checkoutBtn.scrollIntoView();
        await checkoutBtn.waitForClickable({ timeout: 5000 });
        // await checkoutBtn.click();
        await browser.execute(() => {
            const el = document.querySelector('a.nav-link.btn.btn-primary');
            if (el) el.click();
        });
        const individualAmount = $$('//tr //td[4] //strong');
        let total = 0;
        for (let i = 0; i < await individualAmount.length; i++) {
            console.log(await individualAmount[i].getText()); //--₹. 100000
            let price = await individualAmount[i].getText();
            price = parseInt(price.split('₹. ')[1].trim());
            total = total + price;
        }
        let expectedPrice = await $('h3 strong').getText();
        expectedPrice = parseInt(expectedPrice.split('₹. ')[1].trim());
        expectchai(expectedPrice).to.be.eql(total);
        await $('.btn-success').click();
        await $('#country').setValue('Ind');
        await $('.suggestions').waitForDisplayed({ timeout: 10000 });
        await $$('.suggestions li a').filter(async country => await country.getText() === 'India')[0].click();
        await $('[for*="checkbox"]').click();
        await $('.btn-success').click();
        const msg = $('.alert-success');
        await expect(await msg.isDisplayed()).toBeTruthy();
        console.log(await msg.getText());
        expectchai(await msg.getText()).to.contain('Success! Thank you! Your order will be delivered in next few weeks :-).');
        // await browser.pause(5000);
    });
});