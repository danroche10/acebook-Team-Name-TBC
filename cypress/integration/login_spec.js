describe('login', () => {
  it('is expected to display a list of posts', () => {
    cy.request({
      url: 'http://localhost:3000',
      'content-type': 'text/html'
    })
    cy.get('.user_name').type('dandelion');
    cy.get('.user_password').type('Password1');
    cy.get('form').submit();
    cy.location('http://localhost:3000/posts')
    cy.get('.display_name').contains('Welcome dandelion')
  })
})