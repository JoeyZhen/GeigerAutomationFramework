const {Builder, By, Key, until} = require("selenium-webdriver");


class loginPage{
    constructor(driver) {
        this.driver = driver;
        this.url = 'https://yourlogo.geiger.com/';
        this.logintext = By.className('text-danger');
        this.usernameInput = By.id('email');
        this.passwordInput = By.id('password');
        this.rememberMe = By.xpath('//input[@type="checkbox"]');
        this.loginButton = By.xpath("//button[normalize-space()='Log In']");
        this.rushProductstab = By.linkText('Rush Products');
    }
        
    async openUrl(){
        await this.driver.get(this.url);
    }

    async login(username, password){
        await this.driver.findElement(this.logintext).click();
        await this.driver.findElement(this.usernameInput).sendKeys(username);
        await this.driver.findElement(this.passwordInput).sendKeys(password);
        await this.driver.findElement(this.rememberMe).click();
        await this.driver.findElement(this.loginButton).click();
        await this.driver.manage().setTimeouts({ implicit: 10000 });
    }

    async rushProducts(){
        await this.driver.findElement(this.rushProductstab).click();
    }

    }

module.exports = loginPage;