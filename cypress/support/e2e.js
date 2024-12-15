// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register';

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.Commands.add('signIn', (email, password) => {
    cy.get('input[name="user[email]"]').type(email)
    cy.get('input[name="user[password]"]').type(password)
    cy.contains('Sign in').click()
  });