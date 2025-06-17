import { expect as expectchai } from "chai";

describe('Functional scenarios', () => {
    it('Dynamic dropdown control', async () => {
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
        await $('#autocomplete').setValue("Ind");
        const drdo = $('.ui-menu-item');
        await drdo.waitForDisplayed({ timeout: 3000 });
        const items = $$('.ui-menu-item div');
        for (let i = 0; i < await items.length; i++) {
            if (await items[i].getText() === 'India') {
                await items[i].click();
                break;
            }
        }
        await browser.saveScreenshot("screenshot/screenshot.png");
    });

    it('Scroll and Hover control', async () => {
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
        await $('#mousehover').scrollIntoView();
        await $('#mousehover').moveTo();
        await $('=Top').click();
    });

    it('Alert control', async () => {
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
        await $('#name').setValue('Sameer');
        await $('#confirmbtn').click();
        console.log(await browser.isAlertOpen());
        expectchai(await browser.isAlertOpen()).to.be.true;
        expectchai(await browser.getAlertText()).to.contain('Sameer');
        await browser.acceptAlert();
        // await browser.dismissAlert();
    });
    it('Web Tables validation', async () => {
        await browser.url('https://rahulshettyacademy.com/seleniumPractise/#/offers');
        await $('//tr//span[contains(text(), "fruit")]').click();
        await browser.pause();
        const fruits = $$('//tr /td[1]');
        let fruitsList = [];
        for (let i = 0; i < await fruits.length; i++) {
            fruitsList.push(await fruits[i].getText());
        }
        // fruitsList = await fruits.map(async (fruit) => await fruit.getText()); //--can iterate through loop or use map
        const sortedFruits = fruitsList.sort();
        expectchai(sortedFruits).to.eql(fruitsList);
    });
});