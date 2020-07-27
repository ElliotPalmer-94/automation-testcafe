import { Selector, t } from "testcafe";

class loginPage {
    
    loginButton: Selector;
    passwordInput: Selector;
    usernameInput: Selector;
    header: Selector;
    failedLoginMessage: Selector;

    constructor() {

        this.usernameInput = Selector('#username');
        this.passwordInput = Selector('#password');

        this.loginButton = Selector('button[type="submit"]');

        this.header = Selector('h4[class="subheader"]');

        this.failedLoginMessage = Selector('[id="flash"]');

    }

    async login (username, password) {
        await t
            .typeText(this.usernameInput, username)
            .typeText(this.passwordInput, password)

            .click(this.loginButton);
    }
}

export default new loginPage();