const {test, expect} = require('@playwright/test');
const { employePage } = require('../pages/employee');

test.use({storageState:'auth.json'});

test('Add Employee', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    const employee = new employePage(page);
    await employee.gotoPIM();
    await employee.addEmployee();
    await page.waitForLoadState('networkidle');
    await employee.verifyEmployee();
});