describe('PUT Request - Update Post', () => {
  it('should update the post', () => {
    cy.request({
      method: 'PUT',
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      body: {
        id: 1,
        title: 'updated title',
        body: 'updated body',
        userId: 1
      }
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).to.have.property('title', 'updated title')
    })
  })
})
