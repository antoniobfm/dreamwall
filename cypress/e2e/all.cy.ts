describe('Wall', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should not be able to save dimensions that results in less than 1m² of wall area', () => {
    cy.getBySel('height-input-0').type('5');
    cy.getBySel('width-input-0').type('5');

    cy.getBySel('error-message-height-0').should(
      'have.text',
      'Area minima de 1m²',
    );
  });

  it('Should not be able to save dimensions that results in more than 50m² of wall area', () => {
    cy.getBySel('height-input-0').type('50000');
    cy.getBySel('width-input-0').type('50000');

    cy.getBySel('error-message-height-0').should(
      'have.text',
      'Area maxima de 50m²',
    );
  });

  it('Should be able to save dimensions', () => {
    cy.getBySel('height-input-0').type('500');
    cy.getBySel('width-input-0').type('500');
    cy.getBySel('button-0').click();

    cy.get('.header > span').should('have.text', '5m/L - 5m/A');
  });

  it('Should be able to view the report after saving all dimensions', () => {
    cy.getBySel('height-input-0').type('500');
    cy.getBySel('width-input-0').type('500');
    cy.getBySel('button-0').click();
    cy.get('[data-test="header-0"] > span').should('have.text', '5m/L - 5m/A');

    cy.getBySel('height-input-1').type('500');
    cy.getBySel('width-input-1').type('500');
    cy.getBySel('button-1').click();
    cy.get('[data-test="header-1"] > span').should('have.text', '5m/L - 5m/A');

    cy.getBySel('height-input-2').type('500');
    cy.getBySel('width-input-2').type('500');
    cy.getBySel('button-2').click();
    cy.get('[data-test="header-2"] > span').should('have.text', '5m/L - 5m/A');

    cy.getBySel('height-input-3').type('500');
    cy.getBySel('width-input-3').type('500');
    cy.getBySel('button-3').click();
    cy.get('[data-test="header-3"] > span').should('have.text', '5m/L - 5m/A');

    cy.getBySel('report-not-done').should('not.exist');
  });

  it('Should be able to view the report after saving all dimensions', () => {
    cy.getBySel('height-input-0').type('500');
    cy.getBySel('width-input-0').type('500');
    cy.getBySel('button-0').click();
    cy.get('[data-test="header-0"] > span').should('have.text', '5m/L - 5m/A');

    cy.getBySel('height-input-1').type('500');
    cy.getBySel('width-input-1').type('500');
    cy.getBySel('button-1').click();
    cy.get('[data-test="header-1"] > span').should('have.text', '5m/L - 5m/A');

    cy.getBySel('height-input-2').type('500');
    cy.getBySel('width-input-2').type('500');
    cy.getBySel('button-2').click();
    cy.get('[data-test="header-2"] > span').should('have.text', '5m/L - 5m/A');

    cy.getBySel('height-input-3').type('500');
    cy.getBySel('width-input-3').type('500');
    cy.getBySel('button-3').click();
    cy.get('[data-test="header-3"] > span').should('have.text', '5m/L - 5m/A');

    cy.getBySel('report-not-done').should('not.exist');
  });
});

export {};
