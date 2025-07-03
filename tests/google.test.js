const puppeteer = require('puppeteer');

describe('Google Search Test', () => {
  it('should search for Puppeteer on Google', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.google.com');
    await page.type('input[name="q"]', 'Puppeteer');
    await page.keyboard.press('Enter');
    await page.waitForSelector('#search');
    await browser.close();
  });
});
