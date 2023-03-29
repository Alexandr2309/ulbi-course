import { TestProvider } from '../../src/shared/lib/tests/componentRender/componentRender';
import { EditableProfileCard } from '../../src/features/EditableProfileCard';

describe('EditableProfileCard.cy.ts', () => {
  it('playground', () => {
    cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
    cy.mount(
      <TestProvider>
        <EditableProfileCard />
      </TestProvider>,
    );
  });
});
