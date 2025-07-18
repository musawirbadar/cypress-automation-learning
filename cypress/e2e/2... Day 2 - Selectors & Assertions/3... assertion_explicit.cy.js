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

    //Explicit Assertion
    //This assertion provides more control and we can assert more here as compare to implicit for example
    //character length is not assert through implicit but through explicit we can do it and through invoke.
    //We will talk about invoke later just giving you clue about invoke. 

    /*From the above code when the Submit button is hit the output is generated in the seperate box having
    id #output under this div all of the outputs are showing like name email current and permanent address
    through explicit assertion we will take #output and then we user .then($e1) => {...} this waits cypress
    to get output then hands over full DOM element to us named as $e1*/
    cy.get('#output').then(($e1) => {
            const name = $e1.find('#name').text()
            const email = $e1.find("email").text()
    /* $e1.find(#name).text() basically find element #name insdie the output box and get its text, const
    name is constant variable which holds the output text of name which is Syed Musawir. Same we wrote to get
    email*/
            expect(name).to.include('Syed Musawir')
            expect(email).to.include('musawir@exampe.com')
    /*Here we use expect(name) to assert that if name contains Syed Musawir or not. We know that name variable
    holds the value of Syed Musawir so in the above line we expect(name).to.include('Syed Musawir) if this matches
    with name assertion passes*/

    expect(name.length).to.equal(17) //This includes Name: prefix as well becasue I don't trim it

    }) //explicit assertion bracket end

}) //It block bracket end
