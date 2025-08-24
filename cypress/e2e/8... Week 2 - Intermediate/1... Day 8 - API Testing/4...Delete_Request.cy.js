describe('DELETE Request - Remove Post', () => {
  it('should delete the post', () => {
    cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        expect(res.status).to.eq(200)
      })
  })
})
