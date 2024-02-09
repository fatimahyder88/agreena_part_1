const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  chromeWebSecurity: false,
  viewportWidth: 1000,
  viewportHeight: 660,
  requestTimeout: 5000,
  responseTimeout: 600000,
  env: {
    baseUrl: "http://localhost:3000/",
  },
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
