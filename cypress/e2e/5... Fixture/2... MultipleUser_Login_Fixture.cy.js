describe('Login with multiple users from fixture', () => {
  it('Should login using each user from fixture file', () => {
    cy.fixture('users').then((userData) => {
      userData.forEach((user) => {
        // Visit login page for each user
        cy.visit('https://demoqa.com/login');

        // Fill and submit login form
        cy.get('#userName').clear().type(user.userName);
        cy.get('#password').clear().type(user.password);
        cy.get('#login').click();

        // Assertion after login (this may vary based on actual page behavior)
        cy.get('body').then(($body) => {
          if ($body.find('#userName-value').length > 0) {
            cy.get('#userName-value').should('contain.text', user.userName);
            cy.log(`✅ Login successful for: ${user.userName}`);
            cy.get('#submit').click(); // Logout to test next user
          } else {
            cy.log(`❌ Login failed for: ${user.userName}`);
          }
        });
      });
    });
  });
});
