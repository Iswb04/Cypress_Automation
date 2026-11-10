describe('Teste 25 - Verify Scroll Up using Arrow button', () => {
  it('desce até o rodapé e retorna ao topo usando a seta', () => {
    cy.abrirHome();
    cy.scrollTo('bottom');
    cy.contains('#footer', 'Subscription', { matchCase: false }).should('be.visible');
    cy.get('#scrollUp').should('be.visible').click();
    cy.window().its('scrollY').should('be.lessThan', 100);
    cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');
  });
});
