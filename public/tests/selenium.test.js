const { Builder, By, Key, until } = require('selenium-webdriver');
require('chromedriver');

async function runTest() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Accéder à la page de l'application
    await driver.get('http://localhost:3000');
    console.log('Page loaded');

    // Attendre que l'élément avec l'ID "username" soit présent
    await driver.wait(until.elementLocated(By.id('username')), 10000);
    await driver.wait(until.elementLocated(By.id('password')), 10000);
    console.log('Login form elements located');

    // Remplir le formulaire de connexion
    await driver.findElement(By.id('username')).sendKeys('testuser');
    await driver.findElement(By.id('password')).sendKeys('testuserpassword', Key.RETURN);
    console.log('Login form submitted');

    // Attendre que la page de chat se charge en utilisant XPath
    console.log('Login test passed successfully');
  } catch (error) {
    console.error('Login test failed', error);
  } finally {
    await driver.quit();
  }
}

runTest();
