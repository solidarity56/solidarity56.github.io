import puppeteer from 'puppeteer';
import fs from 'fs/promises';

async function scrapeAndSave() {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.goto('https://példa-oldalad.github.io', { waitUntil: 'networkidle0' });

    const selector = "#__nuxt > div > div > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > div.text-h5.text-md-h2.text-archivo-expanded.mb-2.d-flex.justify-space-between > p:nth-child(1)";
    const number = await page.$eval(selector, el => el.innerText.trim());

    console.log(`Mai szám: ${number}`);

    await fs.writeFile('number.txt', number);

    await browser.close();
}

scrapeAndSave()
    .catch(err => {
        console.error('Hiba:', err);
        process.exit(1);
    });
