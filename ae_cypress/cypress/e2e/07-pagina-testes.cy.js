describe('Teste 07 - Verify Test Cases Page', () => {
  it('abre a página com os casos de teste', () => {
    cy.abrirHome();
    cy.get('a[href="/test_cases"]').first().click();
    cy.url().should('include', '/test_cases');
    cy.contains('h2', 'Test Cases', { matchCase: false }).should('be.visible');
    cy.contains('Test Case 1: Register User').should('exist');
  });
});
