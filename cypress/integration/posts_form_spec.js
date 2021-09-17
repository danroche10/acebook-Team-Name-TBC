describe('getPosts', () => {
  it('is expected to display a list of posts', () => {
    cy.request({
      url: 'http://localhost:3000',
      'content-type': 'text/html'
    })
    cy.visit('http://localhost:3000/posts');
    cy.get('.post_text').type('Hey YALL!!!');
    cy.get('form').submit();
    cy.get('.posts').contains('Hey YALL!!!');
  })
})