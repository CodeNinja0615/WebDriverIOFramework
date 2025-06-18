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

    xit('Alert control', async () => {
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
        const fruits = $$('//tr /td[1]');
        let fruitsList = [];
        for (let i = 0; i < await fruits.length; i++) {
            fruitsList.push(await fruits[i].getText());
        }
        // fruitsList = await fruits.map(async (fruit) => await fruit.getText()); //--can iterate through loop or use map
        const unsortedFruits = fruitsList.slice(); //---Creates a copy or array
        const sortedFruits = unsortedFruits.sort();
        expectchai(sortedFruits).to.eql(unsortedFruits);
    });

    it('Web Table filter validation', async () => {
        const expectedFruitName = 'Tomato'
        await browser.url('https://rahulshettyacademy.com/seleniumPractise/#/offers');
        await $('#search-field').setValue(expectedFruitName);
        const fruitName = $$('//tr//td[1]');
        await expect(fruitName).toBeElementsArrayOfSize({ eq: 1 }); //--To check array size eql 1
        const actualFruitName = await fruitName[0].getText();
        expectchai(actualFruitName).to.eql(expectedFruitName);
    });
});