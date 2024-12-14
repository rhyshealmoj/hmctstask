describe('Login Data Validation Tests for Ultimate QA Login Validation Demo', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Username and password is valid', () => {        
        cy.get('input[name="user[email]"]').type("email@email.com")
        cy.get('input[name="user[password]"]').type("password")
        cy.contains('Sign in').click()

        
        cy.get('.student-dashboard__welcome')
        .should('have.text', 'Welcome back, Auto T!');
        
        //checks user page is reached
        //checks text links
        cy.contains('My courses')
        cy.contains('View more courses')
        cy.contains('See Overview')
        cy.contains('Start Course')

        //checks elements
        //course card
        cy.get('.card__body--large')
        //user drop down
        cy.get('.dropdown__toggle-button').should('have.text', 'Auto T')
        //my dashboard element
        cy.get('.header__nav-item--default')
        //search bar is available can be populated
        cy.get('input[name="q"]').type("data can be input")
        
        
      })
    
    it('Username field empty and password is valid', () => {
        cy.get('input[name="user[password]"]').type(Math.random().toString(36).slice(2))
        cy.contains('Sign in').click()
        cy.contains('Invalid email or password')
      })

      it('Username field empty and password is empty', () => {
        cy.contains('Sign in').click()
        cy.contains('Invalid email or password')
      })

    it('Username field populated with invalid email address (no @ symbol) and password is valid', () => {
        cy.get('input[name="user[email]"]').type("emailemail.com")
        cy.get('input[name="user[password]"]').type(Math.random().toString(36).slice(2))
        cy.contains('Sign in').click()
        cy.contains('Invalid email or password')
      })

    it('Username field populated with invalid email address (comma instead of a full stop) and password is valid', () => {
        cy.get('input[name="user[email]"]').type("email@email,com")
        cy.get('input[name="user[password]"]').type(Math.random().toString(36).slice(2))
        cy.contains('Sign in').click()
        cy.contains('Invalid email or password')
      })

    it('Username field populated with invalid email address (no full stop) and password is valid', () => {
        cy.get('input[name="user[email]"]').type("email@emailcom")
        cy.get('input[name="user[password]"]').type(Math.random().toString(36).slice(2))
        cy.contains('Sign in').click()
        cy.contains('Invalid email or password')
      })
})