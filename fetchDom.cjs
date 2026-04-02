const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    console.log('Launching browser...');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    console.log('Navigating to page...');
    
    // Wait until network is mostly idle to ensure React has loaded and rendered the page
    await page.goto('https://shark-tank-signup.lovable.app', { waitUntil: 'networkidle0', timeout: 60000 });
    
    // Give an extra 2 seconds for any animations to finish and content to settle
    await new Promise(r => setTimeout(r, 2000));
    
    console.log('Extracting DOM...');
    const html = await page.evaluate(() => {
        // Return the body inner HTML (which contains the #root div and all React components)
        return document.body.innerHTML;
    });
    
    console.log('Writing to rendered.html...');
    fs.writeFileSync('rendered.html', html);
    
    await browser.close();
    console.log('Done.');
})();
