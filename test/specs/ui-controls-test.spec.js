import { expect as expectchai } from 'chai';
import data from './../../dataSet.json'

describe('UI Controls Test Suite', () => {
    it('UI Controls 001', async () => {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
        await browser.maximizeWindow();
        await $('#username').setValue('rahulshettyacademy');
        const password = $('#password');
        await password.setValue('learning');
        const radio = $$('.checkmark')[1];
        await radio.click();
        await $('.modal-body').waitForStable({ timeout: 5000 });
        const popUpOK = $('#okayBtn');
        await popUpOK.waitForStable({ timeout: 2000 });
        await popUpOK.click();
        console.log(await radio.isSelected());
        const dropdown = $('select.form-control');
        await dropdown.selectByIndex(1);
        // console.log(dropdown.getValue()) //--teach
        expectchai(await dropdown.getValue()).to.equal('teach');
        // await expect(await radio.isSelected()).toBeTruthy();
        const checkbox = $('#terms');
        await checkbox.waitForClickable({ timeout: 5000 })
        await checkbox.click();
        await $('#signInBtn').click();
        const banner = $('//a[text()="ProtoCommerce"]');
        await banner.waitForExist({ timeout: 5000 });
        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('angularpractice'),
            {
                timeout: 10000,
                timeoutMsg: 'Expected to be on the angularpractice page after login'
            }
        );
        await expect(browser).toHaveUrl(expect.stringContaining('angularpractice'));
        console.log(data.name);
    });

    it('UI Controls 002', async () => {
        // can also continue with previous test block (it)
        await expect(browser).toHaveUrl(expect.stringContaining('angularpractice'));
    });

});