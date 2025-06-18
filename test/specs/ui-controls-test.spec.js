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
        // await $('#okayBtn').waitForStable({timeout: 2000});
        await $('#okayBtn').click();
        console.log(await radio.isSelected());
        const dropdown = $('select.form-control');
        await dropdown.selectByIndex(1);
        // console.log(dropdown.getValue()) //--teach
        expectchai(await dropdown.getValue()).to.equal('teach');
        // await expect(await radio.isSelected()).toBeTruthy();
        await $('#terms').click();
        await $('#signInBtn').click();
        const banner = $('//a[text()="ProtoCommerce"]');
        await banner.waitForExist({ timeout: 5000 });
        await expect(browser).toHaveUrl(expect.stringContaining('angularpractice'));
        console.log(data.name);
    });

    it('UI Controls 002', async () => {
        // can also continue with previous test block (it)
        await expect(browser).toHaveUrl(expect.stringContaining('angularpractice'));
    });

});