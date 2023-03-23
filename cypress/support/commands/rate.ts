export const setRate = (starsCount: number, text: string) => {
  cy.getByTestId(`StarRating.${starsCount}`).click();
  cy.getByTestId('RatingCard.Input').type(text);
  cy.getByTestId('RatingCard.Send').click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      setRate(starsCount: number, text: string): Chainable<void>,
    }
  }
}
