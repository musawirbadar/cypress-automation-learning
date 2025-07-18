describe('If-Else Condition',()=>{
    it('Login using if-else condition',()=>{
        cy.visit('https://demoqa.com/login') 
        cy.get('#userName').type('Musaiwr')
        cy.get('#password').type('Musawir')
        cy.get('#login').click()
        cy.wait(1000)

    /* Now we will apply if-else condition to check if username and password is wrong show message in log,
    if its correct then login successfully, and if anyother behavior log unexpected error */

    cy.get('body').then(($body)=>{
       /*cy.get('body') is used becasue it will select entire body of the page and we do it becasue we have 
       to search inside the entire page for specific element or message*/
       /* $body is nothing but variable, you may use $a $b $xyx as well. It behaves like a jQuery DOM-Wrapped Object
       so you can use jQuery methods like .find() on it*/

     
      if($body.find('#name:contains("Invalid username or password!")').length>0){
        cy.log('Login Failed - Invalid Credentials')
       }
       /*This is the first condition*/
       /*$body.find('#name:contains("Invalid Username or Password")' means that we are searching for
       the element #name and then check using :contains that if name contains ("Invalid username or Password") 
       */
       /* After this we used length>0. Length returns how many matching elemetns were found and > 0 checks that
       if one or more elements were found
       
       >0 is important becasue length == 0 means that no matching elements were found, so if we use length > 0 it
       will check if matching elements count is 1 then 1 > 0 and condition pass and cypress will move inside if 
       and print cy.log but if no match elements were found like 0 > 1 it means condition fails and control will
       move to next condition.
       */
       else if($body.find('#main.header:contains("profie")').length>0)
        {
            cy.log('Login Successful')
        } 

       /* After if we used else if for next condition if we have only more than 2 condition if only two the
       after if it must be else instead of else if. Just remembers that last condition will be else 
       
       Here we perform same logic as above if creds were successful first condition will skip and this one runs
       to find main header then check if it contains profile or not. If it contains then length will be > 0 
       because there will be one or more matching elements. It it not contains then it means condition fails
       and user must not logged in.*/
        
      else
      {
        cy.log('Unexpected Error')
      }
      /*Used else as this is the last condition and here we've just log unexpected error but we don't have
      any other case for login */ 
    })


    })
})