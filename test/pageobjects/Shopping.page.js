import Common from "./Common.page";

class Shopping extends Common {
    constructor() {
        super();
        this.$banner = () => $('//a[text()="ProtoCommerce"]');
        this.$$cards = () => $$('.card.h-100');
        // this.$cardTitle = () => $('.card-title');
        // this.$cardFotter = () => $('.card-footer .btn');
        this.$checkout = () => $('//a[contains(text(),"Checkout")]');
    }
    async addProductToCart(productsList) {
        const cards = await this.$$cards(); // get all cards first
        for (let product of productsList) {
            for (let card of cards) {
                const title = await card.$('.card-title').getText();
                if (title === product) {
                    await card.$('.card-footer .btn').click();
                    break;
                }
            }
        }
    }
    async checkout(){
        await this.combinedClick(this.$checkout());
    }

}

export default new Shopping();