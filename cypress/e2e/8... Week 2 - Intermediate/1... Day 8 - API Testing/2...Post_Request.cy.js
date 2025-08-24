describe('Post Request - Create User',()=>{
    it('Should create a new user',()=>{
        cy.request({
            method: "POST",
            url: "https://jsonplaceholder.typicode.com/users",
            body: {
                "id": 11,
                "name": "Musawir badar",
                "username": "syed",
                "email": "musawirbadar@gmail.com",
                "address": {
                "street": "Park Lane",
                "suite": "Suite 879",
                "city": "Islamabad",
                "zipcode": "44000",
                "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
    },
                "phone": "00923325471546",
                "website": "google.com",
                "company": {
                "name": "Vigour Pool",
                "catchPhrase": "Proactive didactic contingency",
                "bs": "synergize scalable supply-chains"
    }

            }
        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body).to.have.property('name', 'Musawir badar')

        })
    })
})