describe("Assertions in Cypress",()=>{
   
   })
    it("Implicit Assertion",()=>{
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

        //After submitting the information we are now verifing that if our entered info is correct or not
        //Assertion will be use to confirm that
        //Simple assertions like verify text, length, etc can be done by implicit assertion but 
        // we can do it both way implicit and explicit assertion
        //Let's do it with implicit Assertion First
        cy.get('#name').should('contain.text', 'Syed Musawir')
        //This will get the name from output and matches that if output of name contains Syed Musawir or not
        //If not it will fail the assertion so we will know that something is wrong with our output
        //If it matches we will good to go 
        //This assertion will pass
        cy.get('#email').should('contain.text', 'musawir@example.com')
        //Same is the case here, this assertion will pass
        cy.get('.border > #currentAddress').should('contain.text', 'Lahore')
        //Here we get the output of current address and apply the assertion that current address must be Lahore
        //This assertion will fail becasue current address is "Islamabad" not "Lahore"



    })
