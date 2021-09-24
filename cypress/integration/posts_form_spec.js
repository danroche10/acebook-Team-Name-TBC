describe('getPosts', () => {
  it('is expected to display a list of posts', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#user_name').type('dandelion');
    cy.get('#user_password').type('Password1');
    cy.get('form').submit();
    cy.get('.post_text').type('Hey YALL!!!');
    cy.get('form').submit();
    cy.get('.posts').contains('Hey YALL!!!');
  });
});

describe('Posts page', () => {
  it('can add and display an image', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#user_name').type('dandelion');
    cy.get('#user_password').type('Password1');
    cy.get('form').submit();
    cy.contains('Posts');
  });
});
