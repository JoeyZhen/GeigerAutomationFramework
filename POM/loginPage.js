const {Builder, By, Key} = require("selenium-webdriver");


class loginPage{
    constructor(driver) {
        this.driver = driver;
        this.url = 'https://yourlogo.geiger.com/';
        this.logintext = By.className('text-danger');
        this.usernameInput = By.id('email');
        this.passwordInput = By.id('password');
        this.loginButton = By.xpath("//button[@class='btn btn-primary']");
        this.rushProductstab = By.linkText('Rush Products');
    }
        
    async openUrl(){
        await this.driver.get(this.url);
    }

    async login(username, password){
        await this.driver.findElement(this.logintext).click();
        await this.driver.findElement(this.usernameInput).sendKeys(username);
        await this.driver.findElement(this.passwordInput).sendKeys(password);
        await this.driver.findElement(this.loginButton).click();
        
    }

    async rushProducts(){
        await this.driver.findElement(this.rushProductstab).click();
    }

    }

module.exports = loginPage;