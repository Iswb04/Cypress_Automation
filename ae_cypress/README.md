# Trabalho Final — Automação de Testes com Cypress

## Integrantes
- Isabella Rocha
- Renan Hammerschlag

## Cenários automatizados
|---|---|---|
| 03 | Login User with incorrect email and password | `03-login-invalido.cy.js` |
| 07 | Verify Test Cases Page | `07-pagina-testes.cy.js` |
| 08 | Verify All Products and product detail page | `08-detalhes-produto.cy.js` |
| 09 | Search Product | `09-busca-produto.cy.js` |
| 10 | Verify Subscription in home page | `10-inscricao-home.cy.js` |
| 11 | Verify Subscription in Cart page | `11-inscricao-carrinho.cy.js` |
| 18 | View Category Products | `18-categorias.cy.js` |
| 19 | View & Cart Brand Products | `19-marcas.cy.js` |
| 25 | Verify Scroll Up using Arrow button | `25-scroll-com-seta.cy.js` |
| 26 | Verify Scroll Up without Arrow button | `26-scroll-sem-seta.cy.js` |


## Como executar
1. Descompacte o arquivo ZIP e abra um terminal na pasta `ae_cypress`.
2. Instale as dependências:
   ```bash
   npm install
   
   ```
3. Abra a interface do Cypress:
   ```bash
   npx cypress open
   ```
   Selecione **E2E Testing** e um navegador
4. Alternativamente, execute todos os testes em modo headless:
   ```bash
   npm test
   ```

## Estrutura do projeto
```text
automationexercise-cypress/
├── cypress/
│   ├── e2e/                # 10 arquivos de teste, um por cenário
│   └── support/
│       ├── commands.js     # Comandos reutilizáveis
│       └── e2e.js          # Inicialização dos comandos
├── cypress.config.js       # Configurações de E2E e URL base
├── package.json            # Dependência e scripts
├── .gitignore
└── README.md
```

