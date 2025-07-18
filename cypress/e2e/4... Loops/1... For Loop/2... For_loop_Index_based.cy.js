describe('Interact with Specific Range of Child Elements Using For Loop', () => {
    it('Clicks on the first 3 book titles only', () => {
      cy.visit('https://demoqa.com/books');
  
      // Loop through the first 3 items using index
      for (let i = 0; i < 3; i++) {
        cy.get('.rt-tbody .rt-tr-group')  // Select all book rows
          .eq(i)                          // Pick the current row by index
          .find('.mr-2')                  // Find the book title element
          .click();                       // Click on it
  
        cy.go('back'); // Go back to the list after clicking
      }
    });
  });
  
  // You can also do the same using cy.wrap(), I'm commenting the cy.wrap() script
 
 /* describe('Click first 3 books using cy.wrap()', () => {
    it('Clicks the first 3 book titles on the page', () => {
      cy.visit('https://demoqa.com/books');
  
      for (let i = 0; i < 3; i++) {
        cy.get('.rt-tbody .rt-tr-group')  // Get all book rows
          .eq(i)                          // Get specific row by index
          .then(($row) => {
            const title = $row.find('.mr-2'); // Find the book title element inside the row
            cy.wrap(title).click();           // Wrap the element and click using Cypress
            cy.go('back');                    // Navigate back after click
          });
      }
    });
  });
  */