describe('JS Alert',()=>{

it('Handles JS Alert', () => {
  cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

  cy.contains('Click for JS Alert').click();

  cy.on('window:alert', (txt) => {
//This listens for when javascript alert appears
//Cypress automatically handles Ok button, no need to click it or return anything
    expect(txt).to.equal('I am a JS Alert');
//We are using assertion here to assert that alert has exactly same text, if its different our test will fail
    });
  });
})