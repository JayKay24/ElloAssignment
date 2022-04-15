/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import mockedBook from '../../src/components/utils/mockedBook';

beforeEach(() => {
  cy.intercept('POST', 'https://fullstack-engineer-test-n4ouilzfna-uc.a.run.app/graphql', {
    statusCode: 200,
    body: { data: { book: { ...mockedBook } } },
  });
  cy.visit('/');
});

describe('Book Flow', () => {
  it('allows a user to load the application and go to the next book page', () => {
    cy.findByText(/loading.../i).should('be.visible');
    cy.findByRole('button', { name: /next/i }).click();
    cy.contains('elephants').should('be.visible');
  });

  it('allows a user to click a word and go to the relevant token view', () => {
    cy.findByText(/loading.../i).should('be.visible');
    cy.findByText(mockedBook.author).should('be.visible');
    cy.findByRole('link', { name: /parrots/i }).click();
    cy.findByRole('button', { name: /back/i }).should('be.visible');
    cy.findByText(/parrots/i).should('be.visible');
    cy.findByRole('button', { name: /back/i }).click();
  });
});
