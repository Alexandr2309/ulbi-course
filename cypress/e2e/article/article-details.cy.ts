let articleId = '';

describe('template spec', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((article) => {
      articleId = article.id;
      cy.visit(`articles/${articleId}`);
    });
  });

  afterEach(() => {
    cy.removeArticle(articleId);
  });

  it('и видит содержание статьи', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
  });

  it('и видит recommendation list', () => {
    cy.getByTestId('ArticleRecommendationList').should('exist');
  });

  it('use fixture(stabs)', () => {
    cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
    cy.getByTestId('ArticleRecommendationList').should('exist');
  });

  it('and can put the comment', () => {
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('AddCommentForm').scrollIntoView();
    cy.addComment('tet');
    cy.getByTestId('Comment.Info').should('exist');
  });

  it('and add star rating', () => {
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(5, 'feedback');
    cy.get('[data-selected=true]').should('have.length', 5);
  });
});
