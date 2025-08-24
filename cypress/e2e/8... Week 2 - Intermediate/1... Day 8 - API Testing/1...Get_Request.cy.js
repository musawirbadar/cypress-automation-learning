describe('Get REQUEST',()=>{
    it('Should Fetch User Details',()=>{
        cy.request('https://jsonplaceholder.typicode.com/users/2')
        .then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body).to.have.property('id',2)
        })

    })
})