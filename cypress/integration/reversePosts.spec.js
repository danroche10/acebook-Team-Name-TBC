describe('Posts page', () => {
  it('visits post page and checks title', () => {
    cy.visit('/posts');
    cy.get('h1').should('contain', 'Posts');
  });
});

// this test can be improved when front end ability to add posts is added
// i.e. can set up test with two posts and then expect posts to appear in reverse
// chronological order
