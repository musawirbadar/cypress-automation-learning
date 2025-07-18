describe("Assertions in Cypress",()=>{
   
})
 it("Explicit Assertion",()=>{
     cy.visit("https://demoqa.com/")
     cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').click() //Click on Element Card
     cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click() // Click on Text Box 
     //Visit demo site then click elements and under elements click on text box
     cy.get('#userName').type('Syed Musawir')
     //Find name field and enter Syed Musawir
     cy.get('#userEmail').type('musawir@example.com')
     //FInd email field and enters email
     cy.get('#currentAddress').type('Peshawar')
     //Find current address field and enters Peshawar
     cy.get('#permanentAddress').type('Islamabad')
     //Find permanent name field and enter Islamabad 
     cy.get('#submit').click()
     //Find submit button and click on it 

   //Simple Implicit Assertion
 // cy.get('#name').should('have.length', 17) Becasue it's not returning the plain text

   cy.get('#name').should('contain.text','Syed Musawir')//Assert that output must contain Syed Musawir
  
// cy.get('#name').should('have.value','Name:')
  /* Comment out above assertion because it will not work .value only works with input with value, textarea, and
  select. In this site Name: is directly under div Name: is not value so we won't use this. .value will user
  with these types:- 

  <input id="name" value="Name:" />
  <textarea id="name">Name:</textarea>

  //below will not work becaue Name is not the value nor the textarea or select
  <div id="name">Name:</div>  <!-- This has no .value -->

 */
  //Combine invoke and implicit 
  cy.get('#name').invoke('text'.trim()).should('eq','Name:Syed Musawir') //.trim() removes blank spaces or lines on both ends
  cy.get('#name').invoke('text').should('have.length',17)

 //Combine invoke and explicit
  cy.get('#name')
  .invoke('text')
  .then((text) => { //.then() shows that this is explicit
    cy.log('Actual text:', text); // See the real text
    expect(text.trim()).to.eq('Name:Syed Musawir'); //.trim() removes blank spaces or lines on both ends
    expect(text.trim()).to.have.length(17)
  });

}) //It block bracket end
