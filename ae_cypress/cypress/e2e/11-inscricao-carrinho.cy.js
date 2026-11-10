describe('Teste 11 - Verify Subscription in Cart page', () => {
  it('realiza inscrição pelo rodapé do carrinho', () => {
    cy.abrirHome();
    cy.get('a[href="/view_cart"]').first().click();
    cy.url().should('include', '/view_cart');
    cy.inscreverEmail();
  });
});
