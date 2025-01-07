const {Builder, By, Key, Options, until} = require("selenium-webdriver");
const LoginPage = require('../POM/loginPage');

// const firefox = require('selenium-webdriver/firefox');

describe('Test', () => { jest.setTimeout(1000000);
test("Login with https://yourlogo.geiger.com/", async function() {
  
        let driver = await new Builder().forBrowser("firefox").build();

        const loginPage = new LoginPage(driver);
    
        await loginPage.openUrl();
    
        await loginPage.login('jxz5374@rit.edu','pgswbxmouikf18j6');
        
        await loginPage.rushProducts();

        await driver.manage().setTimeouts({ implicit: 3000 });

        await driver.findElement(By.xpath("(//img[@class='card-img-top'])[2]")).click();

        await driver.findElement(By.xpath("(//td[@role='button'])[3]")).click();

        await driver.findElement(By.xpath("(//td[@role='button'])[1]")).click();

        await driver.findElement(By.xpath("//button[@type='submit']")).click();

        // await driver.manage().setTimeouts({ implicit: 5000 });
        await driver.sleep(5000);


        await driver.close();
});
});

