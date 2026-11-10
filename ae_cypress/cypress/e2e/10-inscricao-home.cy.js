describe('Teste 10 - Verify Subscription in home page', () => {
  it('realiza inscrição pelo rodapé da página inicial', () => {
    cy.abrirHome();
    cy.inscreverEmail();
  });
});
