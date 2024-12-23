describe('UI Confirmation Tests for Ultimate QA Login Validation Demo', () => {

  it('Confirm username field is present and information can be entered', () => {
    cy.get('input[name="user[email]"]').type("data can be input")
  })

  it('Confirm password field is present and information can be entered', () => {
    cy.get('input[name="user[password]"]').type("data can be input")
  })

  it('Confirm Remember Me radio checkbox is present can be clicked', () => {
    cy.contains('Remember me').should('be.visible')
    cy.contains('Remember me').click()
  })

  it('Confirm Forgot Password button is present and can be clicked', () => {
    cy.contains('Forgot Password?').should('be.visible')
    cy.contains('Forgot Password?').click()
    //when clicked
    cy.contains('Forgot your Password?').should('be.visible')
  })

  it('Confirm Sign in button is present at bottom of form', () => {
    cy.contains('Sign in').click()

    cy.contains('Invalid email or password').should('be.visible')
  })

  it('Confirm Sign In button is present at top of form', () => {
    cy.contains('Sign In').should('be.visible')
    cy.contains('Sign In').click()

    cy.url().should('include', 'https://courses.ultimateqa.com/users/sign_in')
  })

  it('Confirm Create a new account button is present at top of form', () => {
    cy.contains('Create a new account').should('be.visible')
    cy.contains('Invalid email or password').should('not.exist')
  })

  it('Confirm vendor list is present', () => {
    cy.contains('Or sign in with')
    cy.get('.toga-icon-social-linkedIn').should('exist');
    cy.get('.toga-icon-social-facebook').should('exist');
    cy.get('.toga-icon-social-google-colorized').should('exist');
  })
})