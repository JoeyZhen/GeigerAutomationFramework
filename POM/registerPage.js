const {Builder, By, Key} = require("selenium-webdriver");


class registerPage{
    constructor(driver) {
        this.driver = driver;
        this.url = 'https://yourlogo.geiger.com/';
        this.registerLink = By.linkText('Register');
        this.firstname = By.id('first_name');
        this.lastname = By.id('last_name');
        this.email = By.id('email');
        this.phone = By.id('phone');
        this.password = By.id('password');
        this.confirmPassword = By.id('password-confirm');
        this.registerButton = By.xpath('//button[normalize-space()="Register"]');
    }
        
    async openUrl(){
        await this.driver.get(this.url);
    }

    async register(firstname, lastname, email, phone, password, confirmPassword){
        await this.driver.findElement(this.registerLink).click();
        await this.driver.findElement(this.firstname).sendKeys(firstname);
        await this.driver.findElement(this.lastname).sendKeys(lastname);

        await this.driver.findElement(this.email).sendKeys(email);
        await this.driver.findElement(this.phone).sendKeys(phone);
        
        await this.driver.findElement(this.password).sendKeys(password);
        await this.driver.findElement(this.confirmPassword).sendKeys(confirmPassword);

        await this.driver.findElement(this.registerButton).click();       
    }

    }

module.exports = registerPage;