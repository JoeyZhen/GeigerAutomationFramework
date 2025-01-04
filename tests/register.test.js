const {Builder, By, Key} = require("selenium-webdriver");

// const firefox = require('selenium-webdriver/firefox');

async function cmsSearchuser() {

    // const options = new firefox.Options();
    // options.addArguments('--disable-blink-features=AutomationControlled');
    // options.addArguments('--disable-infobars');
    // options.addArguments('--start-maximized');
    // options.addArguments('--headless');

    let driver = await new Builder().forBrowser("firefox").build();

    await driver.get("https://yourlogo.geiger.com/");

    await driver.manage().window().maximize();

    await driver.findElement(By.linkText('Register')).click();

    await driver.findElement(By.id('first_name')).sendKeys("");
    await driver.findElement(By.id('last_name')).sendKeys("");
    await driver.findElement(By.id('email')).sendKeys("");
    await driver.findElement(By.id('phone')).sendKeys("");
    await driver.findElement(By.id('password')).sendKeys("");
    await driver.findElement(By.id('password-confirm')).sendKeys("");

    await driver.quit();


}

cmsSearchuser()
