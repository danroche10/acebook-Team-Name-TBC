// <reference types="cypress" />

describe('The Signup Page', () => {

    // beforeEach(() => {
    // })
    it('contains sign up form', () => {
        cy.visit('http://localhost:3000/signup')
        cy.contains("Welcome to Acebook Sign Up Page") 
    })
  })