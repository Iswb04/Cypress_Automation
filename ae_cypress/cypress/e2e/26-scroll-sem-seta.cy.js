describe('Teste 26 - Verify Scroll Up without Arrow button', () => {
  it('desce até o rodapé e retorna ao topo por rolagem', () => {
    cy.abrirHome();
    cy.scrollTo('bottom');
    cy.contains('#footer', 'Subscription', { matchCase: false }).should('be.visible');
    cy.scrollTo('top');
    cy.window().its('scrollY').should('equal', 0);
    cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');
  });
});
