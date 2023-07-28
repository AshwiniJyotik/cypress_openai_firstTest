

describe('Login to Saucedemo', () => {
  it('should go to Saucedemo and login', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('[type="submit"]').click();
    cy.url().should('include', 'inventory');
  });
});