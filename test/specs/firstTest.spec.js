import { expect as expectchai } from 'chai';

describe('Ecommerce Application', () => {
    it('Login pass page', async () => {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
        await browser.maximizeWindow();
        const title = await browser.getTitle();
        console.log("Page Title:", title); //LoginPage Practise | Rahul Shetty Academy
        await expect(browser).toHaveTitle(expect.stringContaining('LoginPage'));
        await $('#username').setValue('rahulshettyacademy');
        const password = $('#password');
        await password.setValue('learning');
        await $('#terms').click();
        await $('#signInBtn').click();
        const banner = $('//a[text()="ProtoCommerce"]');
        await banner.waitForExist({ timeout: 5000 });
        // await browser.waitUntil(async () => await banner.isDisplayed(),
        //     { timeout: 5000, timeoutMsg: 'Not found' });
        const url = browser.getUrl();
        expect((await url).includes('angularpractice'));

    });
    it('Login fail page', async () => {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
        await browser.maximizeWindow();
        const title = await browser.getTitle();
        console.log("Page Title:", title); //LoginPage Practise | Rahul Shetty Academy
        await expect(browser).toHaveTitle(expect.stringContaining('LoginPage'));
        await $('#username').setValue('rahulshettyacademy');
        const password = $('#password');
        await password.setValue('learnin');
        await $('#terms').click();
        await $('#signInBtn').click();
        const alert = $('.alert-danger');
        /* 
        //---First way
        await browser.waitUntil(async () => (await alert.getText()).includes("Incorrect"),
            { timeout: 5000, timeoutMsg: 'Not found' }); 
        */
        //---Second way
        await browser.waitUntil(async () => { return (await alert.getText()).includes("Incorrect") },
            { timeout: 5000, timeoutMsg: 'Not found' });
        // await browser.waitUntil(async () => { return await $('#signInBtn').getAttribute('value') === 'Sign In' },
        //     { timeout: 5000, timeoutMsg: 'Error msg not visible' })
        await expect(alert).toHaveText(expect.stringContaining('Incorrect'));
    });

});
