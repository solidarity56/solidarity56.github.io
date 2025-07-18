import puppeteer from 'puppeteer';

async function scrape() {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.goto('https://példa-oldal.com', { waitUntil: 'networkidle0' });

    const sel = "#__nuxt > div > div > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > div.text-h5.text-md-h2.text-archivo-expanded.mb-2.d-flex.justify-space-between > p:nth-child(1)";
    const num = await page.$eval(sel, el => el.innerText.trim());

    console.log(`Mai szám: ${num}`);
    await browser.close();
}

scrape().catch(err => {
    console.error(err);
    process.exit(1);
});
