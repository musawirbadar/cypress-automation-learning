describe('Click only even-indexed book title using for loop',()=>{
    it('Click on even index card (0,2,4...)',()=>{
        cy.visit('https://demoqa.com/books');
        cy.get('.rt-tbody .rt-tr-group').then(($rows) => {
/*As cypress is async so we are using .then() to assign whole book section which is .rt .rt-tr-group to
  $rows. We can't direct write cy.get('.rt .rt-tr-group') = rows.length*/
/*Just for your reminder .then() says that find this element give it to me for further actions*/
            const TotalBooks = $rows.length; 
/*Constant variable is created TotalBook, we assign total rows of book section to it. $rows is holding the
book section which is .rt-body .rt-tr-group and .length is used to find the total number of rows. So, here
we assign the section length to TotalBooks to apply loop on that */
            for(let i=0;i<TotalBooks;i++){
/*Here we apply for loop to iterate through each and every book. Suppose that rows.length is equal to 10
which we assign to TotalBooks so i<TotalBooks means that i<10, rest you already know how loop wors */
                if(i%2===0){
                   
/*If condition is applied here to click only on those books which are at the even index. When for loop runs
initial value is 0 it will check 0<10 is correct then it comes down to if condition and see if 0%2 reminder
is 0 it means its even move further to click on that book. If you want to do it for odd just update if
condition to be if(i%2!==0)*/

                  cy.get('.rt-tbody .rt-tr-group')
                    .eq(i)
                    .find('.mr-2')
                    .click({force:true})
                        cy.wait(4000)
                    cy.go('back')
                    cy.get('.rt-table').should('be.visible');
                    //Rest of the logic is same as we used before
                    // You'll get an error this is not becasue of logic this is due to demoQA book details
                    // page which is not working correctly
                }
            }

        })
    })
})

/*cy.get('.rt-tbody .rt-tr-group')
            .eq(i)
            .find('.mr-2')
            .then(($title) => {
              const bookName = $title.text(); // Store title for assertion
              cy.wrap($title).click();

              // Assert the detail page contains the same book name
              cy.get('.book-details').should('contain.text', bookName);
            })*/
/* If you want to assert the book name then this code will work after the if condition, I am not 
using it as of now becausei n demoQA site book details page is not working*/

// Try to lean the assertion code at your own 