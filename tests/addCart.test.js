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

        await driver.sleep(2000);

        // await driver.findElements(By.xpath('//div[@class="ss__result__details card-body"]')).then(function(elements){
        //         elements[3].click();
                
        // });

        await driver.findElement(By.xpath("(//img[@class='card-img-top'])[2]")).click();

        console.log(await driver.getCurrentUrl());

        await driver.close();
});
});

