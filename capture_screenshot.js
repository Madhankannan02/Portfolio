import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox'] // often needed in some envs
    });
    const page = await browser.newPage();

    // Set viewport to a standard desktop resolution
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

    const url = 'http://localhost:5173/';
    console.log(`Navigating to ${url}...`);

    try {
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
    } catch (e) {
        console.log('Navigation error (might be timeout or connection), trying to proceed anyway...');
        console.error(e);
    }

    console.log('Waiting for preloader to finish...');
    // Wait for a significant element that indicates the main site is loaded.
    // The preloader removes itself or fades out. The main content is in #root.
    // Let's wait for a specific element in Hero, e.g., the h1 text "Designing the" or just wait 5 seconds.
    await new Promise(r => setTimeout(r, 5000));

    const outputPath = 'src/assets/images/portfolio-preview.png';
    console.log(`Taking screenshot to ${outputPath}...`);

    await page.screenshot({ path: outputPath, fullPage: false }); // Hero section focus is better than full page usually for preview

    console.log('Screenshot saved.');
    await browser.close();
})();
