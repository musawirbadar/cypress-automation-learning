/*Cypress example using the DemoQA site where we:
Define a set of page URLs
Use a for loop to iterate through them
Visit each page
Check that the page loads with the correct heading (basic validation)*/
describe('Visit multiple DemoQA pages using for loop',()=>{
    const pages = ['/text-box','/check-box','/radio-button','/webatables','/buttons'];
    // const pages is an array we created to visit path of DemoQA
    for (let i=0; i<pages.length; i++)
    // The for loop iterates through each element of the array until the condition fails
    // 'let i = 0' initializes the counter starting at index 0
    // 'i < pages.length' ensures the loop runs as long as i is less than the total number of array items
    // 'i++' increments i by 1 on each iteration
    // For example, if pages.length = 4, the loop runs from i = 0 to i = 4
    // On each iteration, it visits the page at the current index of the array 

    {
        // ${pages[i]} dynamically fetches the URL path from the array based on the current index (i)
        // As the loop runs, it picks each path like '/text-box', '/check-box', etc., one by one
        // Whenever javascript involved like ${pages[i] use backticks (``) instead of ''}
        it(`vist page ${pages[i]} and check if it loads`,()=>{
            cy.visit(`https://demoqa.com${pages[i]}`);
            cy.log(`${pages[i]} Loaded successfully`) 
        }) // it block bracket end
    } // for loop bracket end
}) // describe brakcet end

/* The array and for loop are placed outside the it() block to dynamically create multiple it() blocks.
   This allows each page to be tested in isolation, letting Cypress report pass/fail results individually.
   If the loop is inside a single it() block, all pages are tested as one test, making it harder to pinpoint failures. */
  