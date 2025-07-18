/*We are visiting the DemoQA Book Store page, dynamically looping through the list of books, and:
Logging each book title
Clicking only on books that contain "JavaScript" in the title
Asserting the next page loaded correctly
Going back to the list and continuing*/
describe('Loop through dynamic book list using forEach and wrap',()=>{
    it('Log and conditionally click books containing JavaScript',()=>{
        cy.visit('https://demoqa.com/books')
        cy.get('.rt-tbody .rt-tr-group').each(($row, index, $list)=>{
/*.rt-tr-group is the selector for each book row.
.each() is Cypress’s version of JavaScript’s forEach — it loops through each book dynamically.
$row = current row DOM element
index = loop counter (starts at 0)
$list = full list of all rows */

/*Here's the quick explanation: .rt-tr-group holds 8 books and $row is the current DOM element means
$row is at the 0 idex means first book, this will run the whole logic then index is the loop counter
and increment the counter to 1 which means that $row is now at the first index and second book and so on */

/* $list holds the entire collection of books so it will only be used when needed, as of now
you can ignore $list. Learn this at your own, its pretty straight forward, one example 
cy.log(`Total books found: ${$list.length}`); // This will get total number of elements or books*/
            cy.wrap($row).within(()=>{
/*Cypress commands don’t work directly on jQuery elements like $row, so we wrap it using cy.wrap() to apply Cypress commands.
.within() scopes future Cypress commands to only within that row.*/
                cy.get('.mr-2').invoke('text').then((bookTitle)=>{
/*.mr-2 is the book title's CSS class.
.invoke('text') fetches the text of the book title.
.then() gives access to that text value as bookTitle.*/
                    cy.log(`Book ${index+1}: ${bootTitle.trim()}`)
//This line logs each book title nicely, trimmed of white space.
                    if(bookTitle.includes('Javascript')){
//If the book title contains the word "JavaScript", then:
                        cy.get('.mr-2').click()
//Clicks the title to go to that book’s detail page.
                        cy.get('.main-header').should('contain.text', 'Book Store');
                        cy.go('back')
                    }
                })
            })
        })
    })
})

