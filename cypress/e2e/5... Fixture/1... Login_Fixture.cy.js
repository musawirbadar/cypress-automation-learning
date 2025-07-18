describe('Login using fixture file', () => {
  it('Should login using data from fixture', () => {
    // Load data from fixture
    cy.fixture('loginData').then((user) => {
// cy.fixture is the keyword must have to use when you're using data from the fixture file
// loginData is the name of the fixture file
// As cypress is assync so we use .then() which we discussed many times before, assigning loginData to user
// Now user have all the data of loginData file
      cy.visit('https://demoqa.com/login');

      // Fill login form
      cy.get('#userName').type(user.username); 
// cy.get('#username') get the username field and type user.username means musawir123
// In fixture file username stores the values musawir123 same goes for password
// If I write cy.get('#userName').type(user.password); it will type password in the username field  
      cy.get('#password').type(user.password);
      cy.get('#login').click();

      // Assert login success
      cy.get('.main-header').should('contain.text', 'Profile');
      /* Cypress will give error like trying but not found because this user is not registered so user 
      isn't logged in and can't reach to profile*/
    });
  });
});
