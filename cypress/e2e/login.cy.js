

// Login script
export function login() {
  cy.visit('https://www.saucedemo.com/');
  cy.get('#user-name').type('standard_user');
  cy.get('#password').type('secret_sauce');
  cy.get('[type="submit"]').click();
  cy.url().should('include', 'inventory');
}

// Test script
describe('Login Test', () => {
  beforeEach(() => {
    login();
  });

  it('should login successfully', () => {
    // Test code here
  });
});