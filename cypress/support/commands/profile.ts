import { getByTestId } from './common';

export const updateProfile = (firstname: string = 'test', lastname: string = 'lastname') => {
  getByTestId('EditableProfileCardHeader.Edit').click();
  getByTestId('ProfileCard.firstname').clear().type(firstname);
  getByTestId('ProfileCard.lastname').clear().type(lastname);
  getByTestId('EditableProfileCardHeader.Save').click();
};

export const resetProfile = (testid: string) => cy.request({
  method: 'PUT',
  url: `http://localhost:8000/profile/${testid}`,
  headers: {
    authorization: 'dsfsd',
  },
  body: {
    id: '4',
    first: 'test',
    lastname: 'user',
    age: 5,
    currency: 'EUR',
    country: 'Russia',
    city: 'Moscow',
    username: 'testuser',
    avatar: 'https://play-lh.googleusercontent.com/V_P-I-UENK93ahkQgOWel8X8yFxjhOOfMAZjxXrqp311Gm_RBtlDXHLQhwFZN8n4aIQ',
  },
});

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>,
      resetProfile(profileId: string): Chainable<void>
    }
  }
}
