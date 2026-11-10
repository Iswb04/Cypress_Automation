describe('Teste 03 - Login User with incorrect email and password', () => {
  it('exibe mensagem de erro ao tentar entrar com credenciais incorretas', () => {
    cy.abrirHome();
    cy.get('a[href="/login"]').click();
    cy.contains('h2', 'Login to your account').should('be.visible');
    cy.get('[data-qa="login-email"]').type('usuario.inexistente@example.com');
    cy.get('[data-qa="login-password"]').type('senha-incorreta-123');
    cy.get('[data-qa="login-button"]').click();
    cy.contains('Your email or password is incorrect!').should('be.visible');
  });
});
