import { ROUTES } from '../../../src/constants';

describe('Main', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should show and hide the date range drawer on button click', () => {
    cy.get('[title="Select Date Range"]').as('drawerButton').click();

    cy.contains('Day').as('dayButton').click();

    cy.get('@drawerButton').click();

    cy.get('@dayButton').should('not.be.visible');
  });

  it('should show drawer and go to categories page on button click', () => {
    cy.get('[title="Menu"]').as('menuButton').click();

    cy.contains('Categories').click();

    cy.url().should('include', ROUTES.categories);
  });

  it('should open new income page on new income button click', () => {
    cy.get('[title="Create new income"]').click();

    cy.url().should('include', ROUTES.income);
  });
});
