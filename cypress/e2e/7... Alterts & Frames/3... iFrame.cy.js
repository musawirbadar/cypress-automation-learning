describe('iFrame test with TinyMCE', () => {
  it('Types into TinyMCE editor', () => {
    cy.visit('https://the-internet.herokuapp.com/iframe');
    
    // Load the iframe
    cy.frameLoaded('#mce_0_ifr');

    // Select the contenteditable div inside iframe
    cy.iframe().find('body#tinymce p')
      .clear() // Clear previous content
      .type('Cypress typing inside TinyMCE editor');

      cy.frameLoaded('iframe'); // load iframe first

  //cy.iframe() Selects the iframe on the page (default one). The plugin gives this command. It enters the iframe’s DOM.
  //.clear() Clears the existing content of the <p> element (like deleting text).
  //You'll get error here becasue looks like this iframe is in the read-only mode, try anothe real ifrane.
  //Method is same
});
})
