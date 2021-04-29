require('dotenv').config();
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.goto('https://unsplash.com')

    await page.click('[href="/login"]')

    await page.type('#user_email', process.env.UNSPLASH_EMAIL)
    await page.type('#user_password', process.env.UNSPLASH_SENHA)

    await page.click('[type="submit"]')

    await page.waitForNavigation()

    await page.goto('https://unsplash.com/photos/80x3QULJDN4')

    await page.click('[title="Like photo"]')

    await browser.close()
})()