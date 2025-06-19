export default class Common {
    constructor() {
        this.Menus = { page1: 'product page', page2: 'checkout page' }
        this.Msg = { msg1: 'Success', msg2: 'Failure' }
    }
    async openUrl(url) {
        await browser.url(url ?? '');
        await browser.maximizeWindow();
    }

    /**
     * 
     * @param {WebdriverIO.Element} $element 
     */
    async combinedClick($element) {
        await $element.scrollIntoView();
        await $element.waitForDisplayed();
        await $element.waitForStable();
        await $element.waitForClickable();
        await $element.click();
    }
}