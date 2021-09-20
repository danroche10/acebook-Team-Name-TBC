describe('getPosts', () => {
  it('is expected to display a list of posts', () => {
    cy.request({
      url: 'http://localhost:3000',
      'content-type': 'text/html'
    })
    cy.visit('http://localhost:3000/posts');
    cy.get('.posts').contains('this is our first post');
  })
})