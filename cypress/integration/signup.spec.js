/// <reference types="cypress" />

describe('The Signup Page', () => {
  // beforeEach(() => {
  // })
  it('contains sign up form', () => {
    cy.visit('http://localhost:3000/signup');
    cy.get('#newHandle').type('blahdeblah');
    cy.get('#newPassword').type('blahdeblah');
    cy.get('#newEmail').type('blah@blah.com');
    cy.get('#newUser').submit();
    cy.contains('Posts');
  });
});
