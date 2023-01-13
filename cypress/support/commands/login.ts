import { USER_LOCALSTORAGE_ITEM } from '../../../src/shared/const/localStorage';

export const login = (username: string = 'testuser', password: string = '123') => {
  cy.request({
    method: 'POST',
    url: `http://localhost:8000/login`,
    body: {
      username,
      password,
    },
  }).then(({ body }) => {
    window.localStorage.setItem(USER_LOCALSTORAGE_ITEM, JSON.stringify(body));
  });
};
