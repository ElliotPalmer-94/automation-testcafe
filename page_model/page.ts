import { Selector } from "testcafe";

class Page {
    
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
}

export default new Page();