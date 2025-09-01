describe('E-Commerce App - UI Login', () => {

  before(() => {
    //Runs ONCE before all tests
    cy.visit('https://myshop.com/login')  // go to login page
    cy.get('#username').type('testuser')   // enter username
    cy.get('#password').type('password123') // enter password
    cy.get('#loginBtn').click()             // click login

    //ensure login success
    cy.url().should('include', '/dashboard')
  })

  beforeEach(() => {
    //Runs before EACH test
    cy.visit('https://myshop.com/dashboard')   // ensure we always start from dashboard
  })

  it('Check User Profile', () => {
    cy.contains('Profile').click()
    cy.get('.username').should('contain', 'testuser')
  })

  it('Check Cart Page Opens', () => {
    cy.contains('Cart').click()
    cy.url().should('include', '/cart')
  })

  after(() => {
    //Runs once after ALL tests
    cy.get('#logoutBtn').click()
    cy.url().should('include', '/login')
  })

})
// Just get an idea from this script and try the same on some other site since myshop link is down
//you can use only one hooks or combination of all hooks, it all depends on business need