describe('Newsletter', () => {
    beforeEach(() => {
        cy.task('seedDatabase');
    });
    // it('should display success message', () => {
    //     cy.intercept('POST', '/newsletter*', {status: 201}).as('subscribe');  // any http request  / newsletter?anything and block the request from reaching the backend and sends status 200 back that triggers the appearance of the success message -> block and stub
    //     cy.visit('/');
    //     cy.get('[data-cy="newsletter-email"]').click();
    //     cy.get('[data-cy="newsletter-email"]').type('test@example.com');
    //     cy.get('form button[type="submit"]').click();
    //     cy.wait('@subscribe');
    //     cy.contains('Thanks for signing up');
    // });
    // it('should display validation errors', () => {
    //     cy.intercept('POST', '/newsletter*', {message: 'email allready exists'}).as('subscribe');  // any http request  / newsletter?anything and block the request from reaching the backend and sends status 200 back that triggers the appearance of the success message -> block and stub
    //     cy.visit('/');
    //     cy.get('[data-cy="newsletter-email"]').click();
    //     cy.get('[data-cy="newsletter-email"]').type('test@example.com');
    //     cy.get('form button[type="submit"]').click();
    //     cy.contains('email allready exists');
    //
    // });
    it('should sucessfully create a new contact -> testing only the beckend API, SENDING REQUESTS', () => {
        cy.request({
            method: 'POST',
            url: '/newsletter',
            body: {email: 'testExample@gmail.com'},
            form: true
        }).then(res => {
            expect(res.status).to.eq(201)
        })
    });

});