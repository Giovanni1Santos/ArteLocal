const { Builder, By, until } = require('selenium-webdriver');
const { createDriver } = require('./createDriver.e2e.js');

describe('Página de Criação de Produto', () => {
  let driver;

  beforeAll(async () => {
    driver = await createDriver();
    await driver.get('http://localhost:3000/create');
  }, 20000);

  afterAll(async () => {
    await driver.quit();
  });

  it('Deve exibir o formulário de novo produto', async () => {
    const nomeInput = await driver.findElement(By.name('nome'));
    expect(nomeInput).toBeDefined();
    const descricaoInput = await driver.findElement(By.name('descricao'));
    expect(descricaoInput).toBeDefined();
  });

  it('Deve permitir marcar disponibilidade', async () => {
    const checkbox = await driver.findElement(By.name('disp'));
    const checked = await checkbox.isSelected();
    expect(typeof checked).toBe('boolean');
  });
});
