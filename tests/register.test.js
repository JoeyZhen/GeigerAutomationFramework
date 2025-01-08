const {Builder, By, Key} = require("selenium-webdriver");
const RegisterPage = require('../POM/registerPage');

// const firefox = require('selenium-webdriver/firefox');

describe('Test', () => { jest.setTimeout(1000000);
test("Register with https://yourlogo.geiger.com/", async function() {
    // const options = new firefox.Options();
    // options.addArguments('--disable-blink-features=AutomationControlled');
    // options.addArguments('--disable-infobars');
    // options.addArguments('--start-maximized');
    // options.addArguments('--headless');

    let driver = await new Builder().forBrowser("firefox").build();

    const registerPage = new RegisterPage(driver);
    
    await registerPage.openUrl();

    await registerPage.register('','','','','','');

    await driver.close();


});
});
