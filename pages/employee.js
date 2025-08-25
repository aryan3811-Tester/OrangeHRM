class employePage {
    constructor(page) {
        this.page = page;
        this.pim='a[href="/web/index.php/pim/viewPimModule"]';
        this.add="button:has-text('Add')";
        this.firstName="input[name='firstName']";
        this.lastName="input[name='lastName']";
        this.employeeId=".oxd-input";
        this.saveButton="button[type='submit']";
        this.Employeelist="//a[contains(text(),'Employee List')]";
        
        
}

async gotoPIM() {
    await this.page.locator(this.pim).click();
}

async addEmployee() {
    await this.page.locator(this.add).click();
    await this.page.locator(this.firstName).fill('final');
    await this.page.locator(this.lastName).fill('code'); 
    await this.page.locator(this.employeeId).last().fill('381112345');    
    await this.page.locator(this.saveButton).click();
}
async verifyEmployee()
{
  await this.page.locator(this.Employeelist).click();
  await this.page.locator('input[placeholder="Type for hints..."]').first().fill('final');
  await this.page.locator("button[type='submit']").click();
  await this.page.waitForLoadState('networkidle');
  const val=await this.page.locator("//div[@class='oxd-table-row']/div").first().textContent();
    console.log(val);
    if(val.includes('final'))
    {
      console.log("Employee added successfully");
    }
    else
    {
      console.log("Employee not added");
    }

}
}
export { employePage };
