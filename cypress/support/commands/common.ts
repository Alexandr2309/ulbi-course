import { USER_LOCALSTORAGE_ITEM } from '../../../src/shared/const/localStorage';
import { User } from '../../../src/entities/User';
import { selectByTestId } from '../../helpers/selectByTestId';

export const login = (username: string = 'testuser', password: string = '123') => cy.request({
  method: 'POST',
  url: `http://localhost:8000/login`,
  body: {
    username,
    password,
  },
}).then(({ body }) => {
  window.localStorage.setItem(USER_LOCALSTORAGE_ITEM, JSON.stringify(body));
  return body;
});

export const getByTestId = (testid: string) => cy.get(selectByTestId(testid));

declare global {
  namespace Cypress {
    interface Chainable {
      login(username?: string, password?: string): Chainable<User>,
      getByTestId(testid: string): ReturnType<typeof cy.get>
    }
  }
}
