describe('Single Post page', () => {
  it('visits single post page and checks title', () => {
    cy.visit('/posts/1');
    cy.get('h1').should('contain', 'Post');
  });
});

describe('Single Post page', () => {
  it('visits and displays a single post', () => {
    cy.visit('/posts/1');
    cy.contains('this is our first post');
  });
});
