#!/usr/bin/env node
const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const path = require('path');

void async function () {
  let url = process.argv[2];
  if (!url) {
    return;
  }

  if (await fs.exists(url)) {
    url = path.resolve(url);
  }
  else if (!url.startsWith('http')) {
    url = 'http://' + url;
  }

  console.log(url);

  const browser = await puppeteer.launch();
  try {
    const [page] = await browser.pages();
    await page.goto(url);
    await page.screenshot({ path: 'screenshot.png' });
    console.log(`    -> ${process.cwd()}/screenshot.png`);
  }
  finally {
    await browser.close();
  }
}()
