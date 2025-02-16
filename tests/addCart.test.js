const {Builder, By, Key, Options, until} = require("selenium-webdriver");
const LoginPage = require('../POM/loginPage');
const { takeScreenshot } = require("../POM/screenshotHelper");

// const firefox = require('selenium-webdriver/firefox');

describe('Test', () => { jest.setTimeout(1000000);
test("Login with https://yourlogo.geiger.com/", async function() {
  
        let driver = await new Builder().forBrowser("firefox").build();

        const loginPage = new LoginPage(driver);
    
        await loginPage.openUrl();

        // await driver.manage().window().setRect({ width: 2160, height: 1080 });
    
        await loginPage.login('chunjingzhen@gmail.com','pgswbxmouikf18j6');
        
        await loginPage.rushProducts();

        await driver.manage().setTimeouts({ implicit: 2000 });

        await driver.findElement(By.xpath("(//img[@class='card-img-top'])[2]")).click();

        const title = Promise.resolve(await driver.findElement(By.xpath("//span[@class='text-brand']")).getText());

        await driver.findElement(By.xpath("(//td[@role='button'])[3]")).click();

        await driver.manage().setTimeouts({ implicit: 2000 });

        await driver.findElement(By.xpath("(//td[@role='button'])[1]")).click();

        // await driver.executeScript('window.scrollBy(0, 500);');

        await driver.manage().setTimeouts({ implicit: 2000 });

        let button = await driver.findElement(By.xpath("//button[normalize-space()='ADD TO QUOTE']"));

        await driver.executeScript("arguments[0].scrollIntoView(true);", button);

        await driver.manage().setTimeouts({ implicit: 2000 });

        button.click();

        await driver.manage().setTimeouts({ implicit: 2000 });

        /* Title validation*/
        const expected = await driver.findElement(By.xpath("//div[@class='media-body']//a[@class='text-dark']")).getText();
        title.then((value) => {expect(value).toBe(expected);})



        await takeScreenshot(driver, 'final.png');

        await driver.close();
});
});

