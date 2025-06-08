import test, { expect } from "@playwright/test"

test(`sales force account creation`,async({page})=>{
await page.goto("http://login.salesforce.com")
await page.getByLabel('Username',{exact:true}).fill('aramya1702536@agentforce.com')
    await page.getByLabel('Password',{exact:true}).fill('Ramya1702')
await page.click("#Login")
await page.waitForTimeout(5000)
expect(page).toHaveTitle('Home | Salesforce')
expect(page).toHaveURL('https://orgfarm-65d7207b7a-dev-ed.develop.lightning.force.com/lightning/page/home')
await page.waitForTimeout(5000)
await page.locator(`.slds-icon-waffle`).click()
await page.getByLabel("View All Applications",{exact:true}).click();
await page.getByPlaceholder('Search apps or items...').fill('service')
await page.locator(`(//mark[text()='Service'])[1]`).click()
await page.locator(`//a[@title='Accounts']`).click()
await page.getByRole('button',{name:'New'}).click()
await page.locator(`//input[@name='Name']`).fill('ram3')
await page.locator(`//button[text()='Save']`).click()
await page.waitForTimeout(1000)
expect (page.locator(`.forceVisualMessageQueue`)).toContainText('ram3')



})