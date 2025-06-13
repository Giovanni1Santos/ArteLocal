const { Builder, By } = require('selenium-webdriver');

describe('Página Inicial', () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/');
  }, 20000);

  afterAll(async () => {
    await driver.quit();
  });

  it('Deve exibir o logo do React Router', async () => {
    const logo = await driver.findElement(By.alt('React Router'));
    expect(logo).toBeDefined();
  });

  it('Deve exibir links de recursos', async () => {
    const links = await driver.findElements(By.css('nav ul li a'));
    expect(links.length).toBeGreaterThan(0);
  });
});
