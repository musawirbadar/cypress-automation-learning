describe('Form Submission with File Upload', () => {

  it('fills the form and uploads a file', () => {
    // Visit the form
    cy.visit('https://demoqa.com/automation-practice-form');

    // Fill in text inputs
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#userEmail').type('johndoe@example.com');

    // Select Gender
    cy.get('label[for="gender-radio-1"]').click(); // Male

    // Enter Mobile Number
    cy.get('#userNumber').type('1234567890');

    // Date of Birth (optional - can be skipped)
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('1995');
    cy.get('.react-datepicker__month-select').select('June');
    cy.get('.react-datepicker__day--015').click();

    // Subject
    cy.get('.subjects-auto-complete__value-container').type(`Maths{enter}`);

    // Hobbies
    cy.get('label[for="hobbies-checkbox-1"]').click(); // Sports
    cy.get('label[for="hobbies-checkbox-2"]').click(); // Reading

    // Upload a picture (add test.png in cypress/fixtures)
    cy.get('#uploadPicture').attachFile('test.png');

    // Current Address
    cy.get('#currentAddress').type('123 Cypress Lane, Test City');

    // State and City (select dropdowns)
    cy.get('#state').click();
    cy.get('.css-11unzgr').contains('NCR').click();

// Click and select "Delhi" in City
    cy.get('#city').click();
    cy.get('.css-11unzgr').contains('Delhi').click();

    // Submit the form
    cy.get('#submit').click();

    // Assertion - Modal should appear
    cy.get('#example-modal-sizes-title-lg')
      .should('contain.text', 'Thanks for submitting the form');
  });

});
