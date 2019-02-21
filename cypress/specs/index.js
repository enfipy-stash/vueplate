// https://docs.cypress.io/api/introduction/api.html

describe('Test index file', () => {
  it('Find text', () => {
    cy.visit('localhost:8080')
    cy.contains('h1', 'Welcome to Your Vue.js App')
  })
})
