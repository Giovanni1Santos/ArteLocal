const { Builder, By, until } = require('selenium-webdriver');
const { createDriver } = require('./createDriver.e2e.js');

describe('Página de Autenticação', () => {
  let driver;

  beforeAll(async () => {
    driver = await createDriver();
    await driver.get('http://localhost:3000/auth');
  }, 20000);

  afterAll(async () => {
    await driver.quit();
  });

  it('Deve exibir o formulário de login', async () => {
    const emailInput = await driver.findElement(By.name('email'));
    expect(emailInput).toBeDefined();
    const passwordInput = await driver.findElement(By.name('password'));
    expect(passwordInput).toBeDefined();
  });

  it('Deve mostrar erro ao tentar logar com senha inválida', async () => {
    await driver.findElement(By.name('email')).sendKeys('teste@teste.com');
    await driver.findElement(By.name('password')).sendKeys('123');
    await driver.findElement(By.css('button[type="submit"]')).click();
    const error = await driver.wait(until.elementLocated(By.css('.text-red-600')), 5000);
    expect(await error.getText()).toMatch(/senha/i);
  });

  it('Deve alternar para registro', async () => {
    await driver.findElement(By.xpath("//button[contains(text(),'Criar uma nova conta')]")).click();
    const nameInput = await driver.findElement(By.name('name'));
    expect(nameInput).toBeDefined();
  });
});
