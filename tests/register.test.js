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

    await driver.sleep(4000);

    


    // await driver.findElement(By.linkText('Register')).click();

    // await driver.findElement(By.id('first_name')).sendKeys("");
    // await driver.findElement(By.id('last_name')).sendKeys("");
    // await driver.findElement(By.id('email')).sendKeys("");
    // await driver.findElement(By.id('phone')).sendKeys("");
    // await driver.findElement(By.id('password')).sendKeys("");
    // await driver.findElement(By.id('password-confirm')).sendKeys("");

    // await driver.findElement(By.xpath('//button[normalize-space()="Register"]')).click();

    await driver.close();


});
});
