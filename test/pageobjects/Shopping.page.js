import Common from "./Common.page";

class Shopping extends Common {
    constructor() {
        super();
        this.$banner = () => $('//a[text()="ProtoCommerce"]');
        this.$$cards = () => $$('.card.h-100');
        // this.$cardTitle = () => $('.card-title');
        // this.$cardFotter = () => $('.card-footer .btn');
        this.$checkout = () => $('a.nav-link.btn.btn-primary');
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
    async checkout() {
        await this.combinedClick(this.$checkout());
        // await this.$checkout().waitForStable();
        // await this.$checkout().scrollIntoView();
        // await browser.execute(() => {
        //     const el = document.querySelector('a.nav-link.btn.btn-primary');
        //     if (el) el.click();
        // });
    }

}

export default new Shopping();