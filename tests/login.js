import { Selector } from 'testcafe';


fixture`Login`
    .page`http://the-internet.herokuapp.com/login`;

test('Login - Login with correct details', async t => {

    await t
        .typeText('#username', 'tomsmith')
        .typeText('#password', 'SuperSecretPassword!')
        .click('button[type="submit"]')

        .expect(Selector('h4[class="subheader"]').innerText).eql('Welcome to the Secure Area. When you are done click logout below.');
});

test('Login - Unable to login with incorrect details', async t => {

    await t
        .typeText('#username', 'incorrect')
        .typeText('#password', 'incorrect')
        .click('button[type="submit"]')

        .expect(Selector('[id="flash"]').innerText).contains('Your username is invalid!');
});