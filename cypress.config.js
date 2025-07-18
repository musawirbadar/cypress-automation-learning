const { defineConfig } = require("cypress");
/*cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})*/
module.exports = defineConfig({
  
  e2e: {   
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
