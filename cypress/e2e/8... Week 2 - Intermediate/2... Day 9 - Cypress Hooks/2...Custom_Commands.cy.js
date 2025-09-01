describe("E-commerce Cart Flow", () => {
  it("should add iPhone to the cart", () => {
    cy.addProductToCart("iPhone 14")
    cy.get(".cart-items").should("contain", "iPhone 14")
  })

  it("should add Samsung Galaxy to the cart", () => {
    cy.addProductToCart("Samsung Galaxy S22")
    cy.get(".cart-items").should("contain", "Samsung Galaxy S22")
  })
})

/*.addProductToCart are coming from commands (Support - Commands), code is written there and we just call this function
and enter the product name*/
/*It makes the code very clean, if we have any change in any field in future we just go to commands and update that field
which will reflect on both it block or even if we use somewhere else*/
