const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const [, , url, outputPath] = process.argv;

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: 'networkidle' });

  const imgPath = path.resolve(__dirname, 'static/imgs/sticker.png');
  const imgData = fs.readFileSync(imgPath).toString('base64');
  const imgSrc = `data:image/png;base64,${imgData}`;

  await page.pdf({
    path: outputPath,
    format: 'A4',
    margin: { top: '80px', bottom: '80px' },
    displayHeaderFooter: true,
    headerTemplate: `
      <div style="display:flex; justify-content:space-between; font-size:12px; width:100%;">
        <img src="${imgSrc}" height="80" />
        <p>Mr. Usama</p>
      </div>
    `,
    footerTemplate: `
      <div style="font-size:10px; width:100%; text-align:center;">
        Page <span class="pageNumber"></span> of <span class="totalPages"></span>
      </div>
    `,
  });

  await browser.close();
})();
