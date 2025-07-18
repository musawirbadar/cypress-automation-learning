/*We want to fill a registration form on DemoQA (https://demoqa.com/automation-practice-form) 
multiple times using different sets of data, including First Name, Last Name, and Email.*/

describe('Fill registration from using forEach, Predefined array',()=>{
//userData is an array holds three records so everytime forEach loop runs one data print  
//It depends on scenario but usually array placed before the describe block for clean code
//We can use it under the describe block as well like I did, this works fine as well
/*It will work under the it block as well but if we use it under the it block, we'll have to use
  loop under it block as well which makes it single test not the 3 so if we have an issue in second data
  it will be hard to figure out*/
//Currently it will create seperate test for all 3 names so if issue occur in any we'll know where it is  
    const userData = [{firstName: 'Syed',lastName: 'Musawir', email: 'musawir@example.com'},
                      {firstName: 'Hafsah',lastName: 'Rafique', email: 'hafsa@example.com'},
                      {firstName: 'John',lastName: 'Doe', email: 'john@example.com'}
                    ];
//userData holds the user record
//forEach iterates through each item in the array
//user is the callback funtion to get one user at a time
//We use it outside the it block so for every user we have seperate it block
    userData.forEach((user)=>{
        it(`Should fill the form with data for ${user.firstName}`,()=>{
            cy.visit('https://demoqa.com/automation-practice-form');
            cy.wrap(user).then((userObj)=>{
/*cy.wrap is used here because plain js is only worked with cy.wrap() since 'user' is a plain js so its
mandatory to use cy.wrap*/
                cy.get('#firstName').clear().type(userObj.firstName);
                cy.get('#lastName').clear().type(userObj.lastName);
                cy.get('#userEmail').clear().type(userObj.email);

                // Assertions to confirm values
                cy.get('#firstName').should('have.value', userObj.firstName);
                cy.get('#lastName').should('have.value', userObj.lastName);
                cy.get('#userEmail').should('have.value', userObj.email);
            })
        })
    })
})

