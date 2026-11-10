describe('Teste 08 - Verify All Products and product detail page', () => {
  it('exibe lista e detalhes do primeiro produto', () => {
    cy.abrirHome();
    cy.abrirProdutos();
    cy.get('.features_items .product-image-wrapper').should('have.length.greaterThan', 0);
    cy.get('a[href^="/product_details/"]').first().click();
    cy.url().should('include', '/product_details/');
    cy.get('.product-information').within(() => {
      cy.get('h2').should('not.be.empty');
      cy.contains('Category:').should('be.visible');
      cy.contains('Rs.').should('be.visible');
      cy.contains('Availability:').should('be.visible');
      cy.contains('Condition:').should('be.visible');
      cy.contains('Brand:').should('be.visible');
    });
  });
});
