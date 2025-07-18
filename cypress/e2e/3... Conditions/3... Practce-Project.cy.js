// Automate DemoQA registration page
// Assert the following fields
// Use if-else condition for practice
describe('DemoQA Registration Page Practice Project',()=>{
    it('Registration automation with if-else conditions',()=>{
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('body').then(($look)=>{
            if($look.find('.text-center:contains("Practice Formm")').length>0){
                cy.log("you're good to go at next step")
                cy.get('h5').then(($look2)=>{
                    if($look2.text().includes('Student Registration Form')){
                        cy.log("Assertion 2 Cleared, Go to next step")
                    }else {
                        cy.log("Hold on, Resolve the issue first")
                    }
                })
                cy.get('#userName-label').should('contain.text','Name') //Implicit Assertion
                cy.get('#submit').click();
                // Implicit Assertion of Border Color
                cy.get('#firstName').should('have.css', 'border-color').and('eq', 'rgb(220, 53, 69)');
                //If-else condition border color assertion
                cy.get('#firstName').then(($e1)=>{
                    const bordercolor = $e1.css('border-color');
                    if (bordercolor === 'rgb(220, 53, 69)'){
                        cy.log('Oops! You got red')
                    }else {
                        cy.log('Wohooo! Good to go')
                    }
                })
                //Explicit assertion to assert border color
                cy.get("#firstName").then(($e2)=>{
                    const borderrang = $e2.css('border-color')
                    expect(borderrang).to.equal('rgb(220, 53, 69)')
                })
            }else {
                cy.log('Hard Luck! Try Again')
            }
        })
    })
})

//You can practice more as much as you can of the same page. 
//Nested if-elese condition, implicit assertion, and exlicit assertions written above for your understanding