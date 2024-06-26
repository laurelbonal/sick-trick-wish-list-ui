describe('Tricks App', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', {
      statusCode: 200,
      body: [
        { id: 1, name: 'Ollie', obstacle: 'Flatground', stance: 'Regular', tutorial: 'https://example.com/ollie' },
        { id: 2, name: 'Kickflip', obstacle: 'Rail', stance: 'Switch', tutorial: 'https://example.com/kickflip' }
      ],
    }).as('getTricks');

    cy.intercept('POST', 'http://localhost:3001/api/v1/tricks', (req) => {
      req.reply({
        statusCode: 201,
        body: {
          stance: "Switch",
          name: "Heelflip",
          obstacle: "Stairs",
          tutorial: "https://example.com/heelflip",
          id: 3
        }
      });
    }).as('postTrick');

    cy.intercept('DELETE', 'http://localhost:3001/api/v1/tricks/*', {
      statusCode: 204,
    }).as('deleteTrick');

    cy.visit('http://localhost:3000');
  });

  it('displays the list of tricks', () => {
    cy.wait('@getTricks');
    cy.get('.trick-card').should('have.length', 2);
    cy.get('.trick-card').first().should('contain', 'Ollie');
    cy.get('.trick-card').last().should('contain', 'Kickflip');
  });

  it('adds a new trick', () => {
    cy.get('select[name="stance"]').select('Switch');
    cy.get('input[name="name"]').type('Heelflip');
    cy.get('select[name="obstacle"]').select('Stairs');
    cy.get('input[name="tutorial"]').type('https://example.com/heelflip');

    cy.get('button[type="submit"]').click();

    cy.wait('@postTrick');

    cy.get('.trick-card').should('have.length', 3);
    cy.get('.trick-card').last().should('contain', 'Heelflip');
    cy.get('.trick-card').last().should('contain', 'Stairs');
    cy.get('.trick-card').last().should('contain', 'Switch');
    cy.get('.trick-card').last().should('contain', 'https://example.com/heelflip');
  });

  it('deletes a trick', () => {
    cy.wait('@getTricks');
    cy.get('.trick-card').should('have.length', 2);
    cy.get('.trick-card').first().should('contain', 'Ollie');

    // Delete the first trick
    cy.get('.trick-card').first().find('button').click();
    cy.wait('@deleteTrick');

    cy.get('.trick-card').should('have.length', 1);
    cy.get('.trick-card').should('not.contain', 'Ollie');
  });
});