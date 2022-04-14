/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import mockedBook from '../../src/components/utils/mockedBook';

// TODO: Figure out how to implement GQL endpoint mocking
// with Cypress

describe('Book Flow', () => {
  it('allows a user to load the application and go to the next book page', () => {
    cy.visit('/');
    cy.findByText(/loading.../i).should('be.visible');
    cy.findByRole('button', { name: /next/i }).click();
    cy.contains('elephants').should('be.visible');
  });

  it('allows a user to click a word and go to the relevant token view', () => {
    cy.visit('/');
    cy.findByText(/loading.../i).should('be.visible');
    cy.findByText(mockedBook.author).should('be.visible');
    cy.findByRole('link', { name: /parrots/i }).click();
    cy.findByRole('button', { name: /back/i }).should('be.visible');
    cy.findByText(/parrots/i).should('be.visible');
    cy.findByRole('button', { name: /back/i }).click();
  });
});
