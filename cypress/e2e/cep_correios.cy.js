beforeEach(() => {
  cy.visit('https://buscacepinter.correios.com.br/')
  cy.url().should('include', '/endereco')

});
describe('CEP Correios', () => {
  it('Preenche corretamente os campos de endereço ao pesquisar um CEP válido', () => {

    cy.get('#endereco').type('28905165')
    cy.get('#tipoCEP').select('Localidade/Logradouro')
    cy.get('#btn_pesquisar').click()

    //Verificar se a aplicação direciona o usuario para a pagina correta
    cy.contains('Resultado da Busca por Endereço ou CEP')

    //verificar se o endereco corresponde ao CEP
    cy.contains('Rua Maestro Clodomiro Guimaraes Oliveira')
    cy.contains('Passagem')
    cy.contains('Cabo Frio/RJ')
    cy.contains('28905-165')

  })
  it('Preenche corretamente os campos de endereço ao pesquisar um endereço válido', () => {

    cy.get('#endereco').type('Rua Mestre Vivim')
    cy.get('#tipoCEP').select('Localidade/Logradouro')
    cy.get('#btn_pesquisar').click()

    //Verificar se a aplicação direciona o usuario para a pagina correta
    cy.contains('Resultado da Busca por Endereço ou CEP')

    //verificar se o CEP corresponde ao endereço
    cy.contains('Rua Mestre Vivim')
    cy.contains('Centro')
    cy.contains('Cabo Frio/RJ')
    cy.contains('28906-150')
  });
  it('Clicar no botão buscar sem preencher os campos', () => {

    cy.get('#btn_pesquisar').click()

    cy.contains('Informe o Endereço com no mínimo 2(dois) caracteres!')
  });
  it('preencher o campo com CEP invalido', () => {

    cy.get('#endereco').type('20000000000000')
    cy.get('#tipoCEP').select('Localidade/Logradouro')
    cy.get('#btn_pesquisar').click()

    //Verificar se a aplicação direciona o usuario para a pagina correta
    cy.contains('Dados não encontrado')
    
  });
  it('preencher o campo com endereço invalido', () => {

    cy.get('#endereco').type('abcdefg')
    cy.get('#tipoCEP').select('Localidade/Logradouro')
    cy.get('#btn_pesquisar').click()

    //Verificar se a aplicação direciona o usuario para a pagina correta
    cy.contains('Dados não encontrado')
  });
})