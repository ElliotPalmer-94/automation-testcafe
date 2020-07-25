import { t } from 'testcafe';
import page from '../../page_model/page';

fixture`Login`
    .page`http://the-internet.herokuapp.com/login`;

test('Login - Login with correct details', async t => {

    await t
        .typeText(page.usernameInput, 'tomsmith')
        .typeText(page.passwordInput, 'SuperSecretPassword!')
        .click(page.loginButton)

        .expect(page.header.innerText).eql('Welcome to the Secure Area. When you are done click logout below.');
});

test('Login - Unable to login with incorrect details', async t => {

    await t
        .typeText(page.usernameInput, 'tomsmith')
        .typeText(page.passwordInput, 'incorrect!')
        .click(page.loginButton)

        .expect(page.failedLoginMessage.innerText).contains('Your password is invalid!');
});