const { IgApiClient } = require('instagram-private-api');
const cron = require('node-cron');
const Instagram = new IgApiClient();

var { getBiography, username, password, updateTime } = require('./Functions')

console.log(`${new Date()} > Instagram Biography Updater online`);

Instagram.state.generateDevice(username);

cron.schedule(updateTime, async () => {

    await Instagram.simulate.preLoginFlow();
    await Instagram.account.login(username, password);
    await Instagram.account.setBiography(getBiography());
    console.log(`${new Date()} > Emoji updated`);
    await Instagram.account.logout()
});