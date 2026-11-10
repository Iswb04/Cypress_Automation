describe('Teste 19 - View & Cart Brand Products', () => {
  it('abre produtos de duas marcas diferentes', () => {
    cy.abrirHome();
    cy.abrirProdutos();
    cy.contains('h2', 'Brands', { matchCase: false }).should('be.visible');
    cy.get('.brands-name a[href*="/brand_products/"]').first().click();
    cy.url().should('include', '/brand_products/');
    cy.contains('h2', /Brand - .* Products/i).should('be.visible');
    cy.get('.features_items .product-image-wrapper').should('have.length.greaterThan', 0);
    cy.get('.brands-name a[href*="/brand_products/"]').eq(1).click();
    cy.url().should('include', '/brand_products/');
    cy.contains('h2', /Brand - .* Products/i).should('be.visible');
    cy.get('.features_items .product-image-wrapper').should('have.length.greaterThan', 0);
  });
});
