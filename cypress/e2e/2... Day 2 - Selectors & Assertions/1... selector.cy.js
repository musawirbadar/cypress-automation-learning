describe ('Selectors in Cypress',()=>{
   /*cypress.on('uncaught:exception', (err, runnable) => {
     // returning false here prevents Cypress from
     // failing the test
     return false
   })*/
    it('Visit demoqa site',()=>{
        cy.visit('https://demoqa.com/');
        //This line will visit the demoqa site link
        cy.get(':nth-child(2) > :nth-child(1) > .card-body > h5').click() 
        //Here we click on the forms link
        //:nth-child(2) selects 2nd child of its parent, parent element must have more than 1 elements
        //">" ensure that next element is a direct child
        //:nth-child(1) is the first child inside the previously selected 2nd child
        //.card-body selects element with the class inside first child of the second child
        //h5 selects the elements inside the .card-body
        cy.wait(1000)
        cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click()
        cy.wait(1000)
        //Contains  
        cy.contains('Submit').click() 
        //find & eq
       // cy.get(":nth-child(2)").find("#hobbies-checkbox-2").click({force:true})
       cy.get("#hobbiesWrapper .col-md-9").eq(0).click({force:true})
    }) 
})
