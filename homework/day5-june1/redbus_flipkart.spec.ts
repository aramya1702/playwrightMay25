
import { chromium, firefox, test, webkit } from "@playwright/test";

test("launch Edge page", async () => {
    const browser = await chromium.launch({channel:'msedge'});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.redbus.in");

    const url = page.url();
    const title = await page.title();
    console.log(`The url of the page ${url}`);
    console.log(title);
});

test(`launch Firefox page`, async () => {

    const browser = await firefox.launch({channel:'firefox'});

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.flipkart.com");

    const url = page.url();
    const title = await page.title();
    console.log(`The url of the page ${url}`);
    console.log(title);



});






