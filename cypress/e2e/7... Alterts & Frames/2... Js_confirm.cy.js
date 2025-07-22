describe('javascript confirms',()=>{

it('Accepts Confirm Alert', () => {
  cy.visit('https://the-internet.herokuapp.com/javascript_alerts');

  cy.contains('Click for JS Confirm').click();

  cy.on('window:confirm', (txt) => {
//This listens when javascript confirm popup appear
//Here we just not assert to complete but hit on ok or cancel button
    expect(txt).to.equal('I am a JS Confirm');
//Assert that js confirm popup is exactly the same we are looking for
    return true; // Accept
//return ture menas it hits the ok button and if you replace true with false cypress will hit the cancel button

  });

  cy.get('#result').should('contain', 'You clicked: Ok');
//Just for assertion that what we click
});
    })
