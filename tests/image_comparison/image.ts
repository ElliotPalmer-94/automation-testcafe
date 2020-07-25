import * as crypto from 'crypto'
import * as fs from 'fs'
import { expect } from 'chai';

const moment = require("moment");
const date = moment().format('MMMM_Do_YYYY');
const screenshot = process.cwd() + `/screenshots/screenshot_${date}.png`;
const baselineHash = '2abd347db625c908d58be232027f914b';

fixture`Login`
    .page`http://the-internet.herokuapp.com`;

test('Image - Screenshot Compare using hash', async t => {

    await t.takeScreenshot(`screenshot_${date}.png`);

    var hash = crypto.createHash('md5').update(screenshot).digest('hex');

    // await t.expect(hash).eql(baselineHash)

    console.log(baselineHash);
    console.log(hash);

 

});

