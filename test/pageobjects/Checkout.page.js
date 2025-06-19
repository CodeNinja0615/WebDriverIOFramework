import Common from "./Common.page";

class Checkout extends Common {
    constructor() {
        super();
        this.$checkoutPage = () => $('//th[text()="Product"]');
        this.$$individualAmount = () => $$('//tr //td[4] //strong');
        this.$totalPrice = () => $('h3 strong');
        this.$submit = () => $('.btn-success');
        this.$country = () => $('#country');
        this.$suggestions = () => $('.suggestions');
        this.$$suggestionsEle = () => $$('.suggestions li a');
        this.$policy = () => $('[for*="checkbox"]');
        this.$msg = () => $('.alert-success');
    }

    /**
     * 
     * @returns {number}
     */
    async calculateTotalAmount() {
        let total = 0;
        for (let i = 0; i < await this.$$individualAmount().length; i++) {
            console.log(await this.$$individualAmount()[i].getText()); //--₹. 100000
            let price = await this.$$individualAmount()[i].getText();
            price = parseInt(price.split('₹. ')[1].trim());
            total = total + price;
        }
        return total;
    }
    /**
     * 
     * @returns {number}
     */
    async getExpectedAmount() {
        let expectedPrice = await this.$totalPrice().getText();
        expectedPrice = parseInt(expectedPrice.split('₹. ')[1].trim());
        return expectedPrice;
    }
    async submitOrder() {
        await this.$submit().click();
    }
    async selectCountry() {
        await this.$country().setValue('Ind');
        await this.$suggestions().waitForDisplayed();
        await this.$$suggestionsEle().filter(async country => await country.getText() === 'India')[0].click();
        await this.$policy().click();
        await this.$submit().click();
    }
}

export default new Checkout();