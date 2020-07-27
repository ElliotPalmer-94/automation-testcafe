import page from '../../page_model/loginPage';

fixture`Login`
    .page`http://the-internet.herokuapp.com/login`;

test('Login - Login with correct details', async t => {

    page.login('tomsmith', 'SuperSecretPassword!');

    await t.expect(page.header.innerText).eql('Welcome to the Secure Area. When you are done click logout below.');
});

test('Login - Unable to login with incorrect details', async t => {

    page.login('tomsmith', 'incorrect!');

    await t.expect(page.failedLoginMessage.innerText).contains('Your password is invalid!');
});