import {expect, test} from '@playwright/test'

test(`learn xpath`,async({page})=>{

    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator(`//input[@id='username']`).fill('demosalesManager')
    await page.locator(`//input[@id='password']`).fill('crmsfa')
    await page.locator(`//input[@class='decorativeSubmit']`).click()
await page.waitForTimeout(2000)
await page.locator(`//a[contains(text(),'CRM')]`).click()
await page.locator(`(//a[contains(text(),'Leads')])[1]`).click()
await page.locator(`//a[contains(text(),"Find Leads")]`).click();
await page.locator(`//div[@class='x-tab-panel-body x-tab-panel-body-top']//input[@name='firstName']`).fill('ramya')
await page.locator(`//div[@class='x-tab-panel-body x-tab-panel-body-top']//input[@name='lastName']`).fill('ananda')
await page.locator(`//button[contains(text(),"Find Leads")]`).click();
await page.locator(`(//a[@class='linktext'])[4]`).click();
await page.locator(`//a[contains(text(),'Edit')]`).click()
await page.locator(`//input[@id='updateLeadForm_companyName']`).fill('cts1');
await page.locator(`#updateLeadForm_annualRevenue`).fill('12324');
await page.locator(`//input[@id='updateLeadForm_departmentName']`).fill('it1');
await page.locator(`//textarea[@name='description']`).fill('itdsfsf');
await page.locator(`(//input[@class='smallSubmit'])[1]`).click()
await page.waitForTimeout(2000)
console.log(page.title());
expect(page.locator(`#viewLead_companyName_sp`)).toContainText('cts1');
expect(page.locator(`#viewLead_annualRevenue_sp`)).toContainText('$12,324.00');
expect(page.locator(`#viewLead_departmentName_sp`)).toContainText('it1');
expect(page.locator(`#viewLead_description_sp`)).toContainText('itdsfsf');
await page.waitForTimeout(1000)
})


