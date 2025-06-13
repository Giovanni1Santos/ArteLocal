const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');
const os = require('os');

function createDriver() {
    const userDataDir = path.join(os.tmpdir(), `chrome-user-data-${Date.now()}`);

    const options = new chrome.Options()
        .addArguments(
            '--no-sandbox',
            '--disable-dev-shm-usage',
            '--headless',
            '--disable-gpu',
            `--user-data-dir=${userDataDir}`
        );

    return new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
}

module.exports = { createDriver };
