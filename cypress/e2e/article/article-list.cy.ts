describe('User is opened the page', () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit('articles');
    });
  });
  it('And articles succsesfully load', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });
});
