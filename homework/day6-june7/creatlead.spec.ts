import {expect, test} from '@playwright/test'

test(`learn xpath`,async({page})=>{

    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator(`//input[@id='username']`).fill('demosalesManager')
    await page.locator(`//input[@id='password']`).fill('crmsfa')
    await page.locator(`//input[@class='decorativeSubmit']`).click()
await page.waitForTimeout(2000)
await page.locator(`//a[contains(text(),'CRM')]`).click()
await page.locator(`//a[contains(text(),"Create Lead")]`).click();
await page.locator(`//input[@id='createLeadForm_companyName']`).fill('cts');

await page.locator(`//input[@id='createLeadForm_firstName']`).fill('ramya');
await page.locator(`//input[@id='createLeadForm_lastName']`).fill('ananda');
await page.waitForTimeout(2000)
await page.locator(`#createLeadForm_personalTitle`).fill('tit1');
await page.locator(`#createLeadForm_generalProfTitle`).fill('asda');
await page.locator(`#createLeadForm_annualRevenue`).fill('1232');
await page.locator(`#createLeadForm_departmentName`).fill('it');
await page.locator(`#createLeadForm_primaryPhoneNumber`).fill('13e23r34r3');

await page.locator(`//input[@class='smallSubmit']`).click();
await page.waitForTimeout(2000)
console.log(await page.title());
expect(page.locator(`#viewLead_companyName_sp`)).toContainText('cts');
expect(page.locator(`#viewLead_firstName_sp`)).toContainText('ramya');
expect(page.locator(`#viewLead_lastName_sp`)).toContainText('ananda');
expect(page.locator(`#viewLead_statusId_sp`)).toContainText('Assigned');
})


