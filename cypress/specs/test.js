// https://docs.cypress.io/api/introduction/api.html

describe('Test', () => {
  it('Visits the app root url', () => {
    cy.visit('localhost:8080')
    cy.contains('a', 'eslint')
  })
})
