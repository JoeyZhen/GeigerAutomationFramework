const fs = require('fs');
const path = require('path');

async function takeScreenshot(driver, fileName) {
  const screenshot = await driver.takeScreenshot();
  const filePath = path.join(__dirname, '../screenshots', fileName);
  fs.writeFileSync(filePath, screenshot, 'base64');
  console.log(`Screenshot saved at: ${filePath}`);
}

module.exports = { takeScreenshot };