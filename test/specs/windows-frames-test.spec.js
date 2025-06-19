import { expect as expectchai } from 'chai';

describe('Windows and Frames Test Suite', () => {
    it('should handle multiple windows', async () => {
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
        await $('.blinkingText:nth-child(1)').click();
        const windows = await browser.getWindowHandles(); //--returns array of length 2 (use getWindowHandles not getWindowHandle)
        //--where 0 index is aprent 1 index is child window
        const parenWin = windows[0];
        const childWin = windows[1];
        await browser.switchToWindow(childWin);
        const newPageText = await $('h1').getText();
        expectchai(newPageText.toLowerCase()).to.eql('Documents request'.toLowerCase());
        await browser.closeWindow(); //--call this before switching to parent
        await browser.switchToWindow(parenWin);
        await browser.newWindow('https://www.google.com/', { type: 'tab' });
        console.log(await browser.getTitle());
        //---always looks for switchWindow and switchToWindow
        await browser.switchWindow('https://rahulshettyacademy.com/loginpagePractise/');
        console.log(await browser.getTitle());
        await browser.pause(5000);
    });

    xit('should handle frames', async () => {
    });
});