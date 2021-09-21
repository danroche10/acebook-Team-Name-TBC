describe('login', () => {
  it('is expected to display a list of posts', () => {
    cy.visit('http://localhost:3000');
    cy.get('#user_name').type('sonic33');
    cy.get('#user_password').type('makers');
    cy.get('#login_form').submit();
    // cy.location('http://localhost:3000/posts');
    cy.contains('Posts');
    // cy.get('.display_name').contains('Welcome dandelion')
  });
  it('is expected to display a list of posts', () => {
    cy.visit('http://localhost:3000');
    cy.get('#user_name').type('wrongusername');
    cy.get('#user_password').type('makers');
    cy.get('#login_form').submit();
    // cy.location('http://localhost:3000/posts');
    cy.contains('Welcome to Acebook');
  });
  it('is expected to display a list of posts', () => {
    cy.visit('http://localhost:3000');
    cy.get('#user_name').type('sonic33');
    cy.get('#user_password').type('wrongpassword');
    cy.get('#login_form').submit();
    // cy.location('http://localhost:3000/posts');
    cy.contains('Welcome to Acebook');
  });
});
