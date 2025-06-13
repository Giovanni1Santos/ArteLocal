const { Builder, By, until } = require('selenium-webdriver');

describe('Página de Produtos', () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000/produtos');
  }, 20000);

  afterAll(async () => {
    await driver.quit();
  });

  it('Deve exibir o título "Nossos Produtos"', async () => {
    const title = await driver.findElement(By.xpath("//*[contains(text(),'Nossos Produtos')]"));
    expect(title).toBeDefined();
  });

  it('Deve exibir cards de produtos', async () => {
    await driver.wait(until.elementsLocated(By.css('.grid .block')), 10000);
    const cards = await driver.findElements(By.css('.grid .block'));
    expect(cards.length).toBeGreaterThan(0);
  });
});
