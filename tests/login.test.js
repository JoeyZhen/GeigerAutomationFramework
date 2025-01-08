const {Builder, By, Key, Options} = require("selenium-webdriver");
const LoginPage = require('../POM/loginPage');

// const firefox = require('selenium-webdriver/firefox');

describe('Test', () => { jest.setTimeout(1000000);
test("Login with https://yourlogo.geiger.com/", async function() {
  
        let driver = await new Builder().forBrowser("firefox").build();

        const loginPage = new LoginPage(driver);

        /*launch the browser and navigate to the Geiger website*/
        await loginPage.openUrl();
    
        /*Login to the Geiger website*/
        await loginPage.login('chunjingzhen@gmail.com','pgswbxmouikf18j6');
        
        /*Navigate to the Rush products page*/
        await loginPage.rushProducts();
    
        /*Verify the Url is matching with the expected result.*/
        const finalUrl = Promise.resolve(await driver.getCurrentUrl());
        finalUrl.then((value) => {
            expect(value).toBe('https://yourlogo.geiger.com/b/24-hour-rush-products');
        })
    
        await driver.close();

});
});
