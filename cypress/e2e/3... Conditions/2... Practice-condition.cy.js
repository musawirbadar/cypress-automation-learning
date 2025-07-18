/* Check if a specific checkbox label is visible before clicking it
Expand the tree, and:

If the “Desktop” checkbox label is visible → click it ✅

Else → log that it was not found ❌ */

describe('Practice Condition',()=>{
    it('Click Dosktop label if exists',()=>{
        cy.visit('https://demoqa.com/checkbox')
        cy.get('.rct-node > .rct-text > .rct-collapse').click()
        cy.get('#app').then(($body)=>{
            if($body.find('.rct-title:contains("Desktop")').length>0){
                cy.log('Desktop Label is Visible')
               cy.contains('label','Desktop').click()
            }else {
                cy.log('Label Not Found!')
            }
        })

    })
    it('Double Click button and assert the message',()=>{
        cy.visit('https://demoqa.com/buttons')
        cy.get('#app').then(($xyz)=>{
            if($xyz.find('#doubleClickBtn:contains("Double Click Me")').length>0){
                cy.log('Hurrayyy! Element Found')
                cy.get('#doubleClickBtn').dblclick() //Used for DoubleClick
                cy.log('Button Clicked')
                cy.get('#doubleClickMessage').should('contain.text', 'You have done a double click')
                cy.log('Assertion Passed')
        // Nested if for practice, below we assert again the DoubleClick Message
        cy.get('#doubleClickMessage').then(($msg)=>{
            if($msg.text().includes('You have done a double click'))
            {
                cy.log('Assertion Passed Successfuly')
            } else {
                cy.log('Failed Assertion')
            }
        })

            } else{
                cy.log('Oops! Element Not Found')
            }

        })
    })
})