const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.automationexercise.com',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    viewportWidth: 1280,
    viewportHeight: 900,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    video: false,
    retries: { runMode: 1, openMode: 0 }
  }
});
