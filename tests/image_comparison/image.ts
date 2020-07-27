import * as crypto from 'crypto'
import * as fs from 'fs'
import { expect } from 'chai';

const screenshotPath = process.cwd() + `/screenshots/image.png`;
const baselineHash = 'bfa5a70e2c1847ed9f00d93a6177033f';

//Create hash for the screenshot
function createHash() {
    var a = crypto.createHash('md5').update(screenshotPath).digest('hex');
    return a
}

// return image hash
const hash = createHash()

fixture`Login`
    .page`http://the-internet.herokuapp.com`;

test('Image - Screenshot Compare using hash', async t => {

    if (fs.existsSync(screenshotPath)) {
        console.log('screenshot already exist, comparing hash now....');

        await t.expect(hash).eql(baselineHash)

    } else {
        console.log('screenshot does not exist, taking screenshot now....');
        await t.takeScreenshot(`image.png`);

        createHash();

        console.log('comparing hash now....')
        await t.expect(hash).eql(baselineHash)
    }

});

