const { Builder, By, until, Key } = require('selenium-webdriver');
const { createDriver } = require('./createDriver.e2e.js');

describe('Fluxo completo de registro, login e cadastro de produto', () => {
  let driver;
  const timestamp = Date.now();
  const testEmail = `selenium${timestamp}@teste.com`;
  const testPassword = 'Teste!123';
  const testProductName = `Produto ${timestamp}`;

  beforeAll(async () => {
    driver = await createDriver();
  }, 20000);

  afterAll(async () => {
    await driver.quit();
  });

  it('Deve registrar um novo usuário', async () => {
    await driver.get('http://localhost:3000/auth');

    await driver.findElement(By.xpath("//button[contains(text(),'Criar uma nova conta')]")).click();

    await driver.findElement(By.name('name')).sendKeys('Usuário Teste');
    await driver.findElement(By.name('email')).sendKeys(testEmail);
    await driver.findElement(By.name('password')).sendKeys(testPassword);
    //await driver.findElement(By.css('button[type="submit"]')).click();
    await driver.findElement(By.xpath("//button[contains(text(),'Registrar')]")).click();

    //await driver.wait(until.urlContains('/'), 10000); // Redirecionado após registro
    await driver.wait(until.elementLocated(By.xpath("//*[contains(text(),'Cadastro realizado com sucesso!')]")), 15000);

  }, 10000);

  it('Deve fazer login com o novo usuário', async () => {
    await driver.get('http://localhost:3000/auth');

    await driver.findElement(By.name('email')).sendKeys(testEmail);
    await driver.findElement(By.name('password')).sendKeys(testPassword, Key.RETURN);
    await driver.findElement(By.xpath("//button[contains(text(),'Entrar')]")).click();

    await driver.wait(until.urlContains('/'), 10000); // Redirecionado após login
  });

  it('Deve exibir página de erro ao acessar /produtos sem produtos cadastrados', async () => {
    await driver.get('http://localhost:3000/produtos');

    const erroTitulo = await driver.wait(
      until.elementLocated(By.xpath("//*[contains(text(),'Oops! Algo deu errado.')]")),
      10000
    );
    expect(erroTitulo).toBeDefined();
  });

  it('Deve cadastrar um novo produto', async () => {
    await driver.get('http://localhost:3000/create/produto');

    await driver.findElement(By.name('nome')).sendKeys(testProductName);
    await driver.findElement(By.name('descricao')).sendKeys('Produto cadastrado via teste Selenium');

    await driver.findElement(By.css('button[type="submit"]')).click();
    await driver.wait(until.urlContains('/produtos'), 10000);
  }, 10000);

  it('Deve encontrar o produto criado em /produtos', async () => {
    await driver.get('http://localhost:3000/produtos');

    await driver.wait(until.elementsLocated(By.css('.grid .block')), 10000);
    const cards = await driver.findElements(By.css('.grid .block'));

    expect(cards.length).toBeGreaterThan(0);

    // Verifica se algum card contém o nome do produto
    const cardTexts = await Promise.all(cards.map(card => card.getText()));
    const encontrado = cardTexts.some(text => text.includes(testProductName));
    expect(encontrado).toBe(true);
  });
});
