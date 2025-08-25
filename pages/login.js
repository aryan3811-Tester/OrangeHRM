class loginPage {
  constructor(page){
    this.page=page;
    this.username="input[name='username']";
    this.password="input[name='password']";
    this.loginButton="button[type='submit']";
  }

  async goto(){
    await this.page.goto(process.env.url);
  }

  async auth(username,password){
    await this.page.locator(this.username).fill(username);
    await this.page.locator(this.password).fill(password);  
    await this.page.locator(this.loginButton).click();
    
}
};

export {loginPage};