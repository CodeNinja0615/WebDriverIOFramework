import Common from "./Common.page.js";

class Loginpage extends Common{
    constructor() {
        super();
        this.$username = () => $('#username');
        this.$password = () => $('#password');
        this.$checkbox = () => $('#terms');
        this.$signIn = () => $('#signInBtn');
    }

    async login(username, password){
        await this.$username().setValue(username);
        await this.$password().setValue(password);
        await this.$checkbox().click();
        await this.$signIn().click();
    }

}

export default new Loginpage();