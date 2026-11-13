describe('Teste 09 - Search Product', () => {
  it('busca por produto e verifica os resultados', () => {
    
    cy.abrirHome();
    cy.abrirProdutos();

    const produto = 'Blue Top';

    cy.get('#search_product').type(produto);
    cy.get('#submit_search').click();

    cy.contains('h2', 'Searched Products', { matchCase: false })
      .should('be.visible');

    cy.get('.features_items .productinfo')
      .should('have.length.greaterThan', 0)
      .each(($item) => {
        cy.wrap($item).should('be.visible');

        cy.wrap($item)
          .find('p')
          .should('contain.text', produto);
      });
  });
});