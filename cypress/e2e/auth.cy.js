describe('Auth', () => {
    beforeEach(() => {
        cy.task('seedDatabase');
    });
    it('should signup with the email that is seeded in database from start and not be able to signup with the same username', () => {
        cy.intercept('POST', '/signup*').as('signup');  // listen for login POST request
        cy.signup();
        cy.wait('@signup');

        cy.location('pathname').should('eq', '/takeaways');
        cy.getCookie('__session').its('value').should('not.be.empty');
        cy.contains('Logout').click()
        cy.signup();
        cy.wait('@signup');
        cy.contains('User exists already.');

    });
    it('should login', () => {
        cy.intercept('POST', '/login*').as('login');  // listen for login POST request

        cy.login();
        cy.wait('@login');
        cy.location('pathname').should('eq', '/takeaways');
        cy.getCookie('__session').its('value').should('not.be.empty');
    });
    it('should logout', () => {
        cy.intercept('POST', '/login*').as('login');  // listen for login POST request

        cy.login();
        cy.wait('@login');

        cy.contains('Logout').click();

        cy.location('pathname').should('eq', '/');
        cy.getCookie('__session').its('value').should('be.empty');

    });
    it('should add a new takeaway', () => {
        cy.intercept('POST', '/login*').as('login');  // listen for login POST request

        cy.login();
        cy.wait('@login');

        cy.visit('/takeaways');

    });

});