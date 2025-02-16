const {Builder, By, Key, Options, until} = require("selenium-webdriver");
const LoginPage = require('../POM/loginPage');
const { takeScreenshot } = require("../POM/screenshotHelper");

// const firefox = require('selenium-webdriver/firefox');

describe('Test narrow search functionality', () => { jest.setTimeout(1000000);
test("Test narrow search functionality", async function() {
  
        let driver = await new Builder().forBrowser("firefox").build();

        const loginPage = new LoginPage(driver);
    
        await loginPage.openUrl();

        // await driver.manage().window().setRect({ width: 2160, height: 1080 });
    
        await loginPage.login('chunjingzhen@gmail.com','pgswbxmouikf18j6');
        
        await loginPage.rushProducts();

        await driver.manage().setTimeouts({ implicit: 2000 });

        await takeScreenshot(driver, 'final.png');

        await driver.close();
});
});

