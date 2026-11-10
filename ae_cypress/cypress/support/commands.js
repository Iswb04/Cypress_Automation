Cypress.Commands.add('abrirHome', () => {
  cy.visit('/');
  cy.get('a[href="/"]').first().should('be.visible');
});

Cypress.Commands.add('abrirProdutos', () => {
  cy.get('a[href="/products"]').first().click();
  cy.url().should('include', '/products');
  cy.contains('h2', 'All Products', { matchCase: false }).should('be.visible');
});

Cypress.Commands.add('inscreverEmail', () => {
  cy.get('#footer').scrollIntoView();
  cy.contains('#footer h2', 'Subscription', { matchCase: false }).should('be.visible');
  const email = `teste${Date.now()}${Cypress._.random(1000, 9999)}@example.com`;
  cy.get('#susbscribe_email').type(email);
  cy.get('#subscribe').click();
  cy.contains('You have been successfully subscribed!').should('be.visible');
});
