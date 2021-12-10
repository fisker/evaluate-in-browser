import launchBrowser from 'launch-puppeteer'

async function evaluate(pageFunction) {
  const browser = await launchBrowser()
  const page = await browser.newPage()
  await page.goto('about:blank')

  let result
  try {
    result = await page.evaluate(pageFunction)
  } finally {
    await page.close()
    await browser.close()
  }

  return result
}

export {evaluate}
