describe('Teste 09 - Search Product', () => {
  it('busca por top e exibe produtos correspondentes', () => {
    cy.abrirHome();
    cy.abrirProdutos();
    cy.get('#search_product').type('top');
    cy.get('#submit_search').click();
    cy.contains('h2', 'Searched Products', { matchCase: false }).should('be.visible');
    cy.get('.features_items .productinfo p').should('have.length.greaterThan', 0)
      .each(($nome) => expect($nome.text().toLowerCase()).to.include('top'));
  });
});
