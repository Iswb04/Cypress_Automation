describe('Teste 18 - View Category Products', () => {
  it('navega entre subcategorias de mulheres e homens', () => {
    cy.abrirHome();
    cy.get('#accordian').should('be.visible');
    cy.get('a[href="#Women"]').click();
    cy.get('#Women a[href*="/category_products/"]').first().click();
    cy.url().should('include', '/category_products/');
    cy.contains('h2', /Women - .* Products/i).should('be.visible');
    cy.get('a[href="#Men"]').click();
    cy.get('#Men a[href*="/category_products/"]').first().click();
    cy.url().should('include', '/category_products/');
    cy.contains('h2', /Men - .* Products/i).should('be.visible');
  });
});
