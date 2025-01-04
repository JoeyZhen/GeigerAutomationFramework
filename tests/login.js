const {Builder, By, Key, Options} = require("selenium-webdriver");
const LoginPage = require('../POM/loginPage');

// const firefox = require('selenium-webdriver/firefox');


describe("Login with https://yourlogo.geiger.com/", function() {
  
    it("Successfully login https://yourlogo.geiger.com/", async function(){
        let driver = await new Builder().forBrowser("firefox").setFirefoxOptions().build();


        const loginPage = new LoginPage(driver);
    
    
        await loginPage.openUrl();
    
        await loginPage.login('jxz5374@rit.edu','pgswbxmouikf18j6');
        
        await driver.sleep(2000);
    
        await loginPage.rushProducts();
    
        
        const finalUrl = Promise.resolve(driver.getCurrentUrl());
    
        finalUrl.then((value) => {
            console.log(value);
        })
    
        await driver.quit();

    });
});

// async function cmsSearchuser() {

    // const options = new firefox.Options();
    // options.addArguments('--disable-blink-features=AutomationControlled');
    // options.addArguments('--disable-infobars');
    // options.addArguments('--start-maximized');
    // options.addArguments('--headless');

   
    // let options = new firefox.Options();
    // options.addArguments('--headless');

// }

// cmsSearchuser()
