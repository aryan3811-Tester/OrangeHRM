const {test,expect} = require('@playwright/test');
const {loginPage} = require('../pages/login');
test('Login', async ({page})=>{
    const Login = new loginPage(page);
    await Login.goto();
    await Login.auth(process.env.user_name,process.env.user_password);
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.context().storageState({ path: 'auth.json' });
});
