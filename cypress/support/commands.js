// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';
import 'cypress-iframe';
// Add product to cart custom command
Cypress.Commands.add("addProductToCart", (productName) => {
  cy.visit("https://example-ecommerce.com")  // site link
  cy.get("input[placeholder='Search']").type(productName)
  cy.contains("button", "Search").click()
  cy.contains(".product-title", productName).click()
  cy.contains("button", "Add to Cart").click()
})
//In the first line we use productName, its declaring the functiona parameter
//Without declaring in function parameter we can't use productName variable below