#!/usr/bin/env node
const puppeteer = require('puppeteer');

void async function () {
  const browser = await puppeteer.launch();
  try {
    let url = process.argv[2];
    if (!url) {
      return;
    }

    if (!url.startsWith('http')) {
      url = `file://${process.cwd()}/${url}`;
    }

    const [page] = await browser.pages();
    console.log(url);
    await page.goto(url);
    await page.screenshot({ path: 'screenshot.png' });
    console.log(`    -> ${process.cwd()}/screenshot.png`);
  }
  catch (error) {
    throw error;
  }
  finally {
    await browser.close();
  }
}()
