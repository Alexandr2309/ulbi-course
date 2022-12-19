import { Profile } from 'entities/Profile';
import { Currency } from 'entities/CurrencySelect';
import { Country } from 'entities/CountrySelect';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { $api } from 'shared/api/api';
import { EditableProfileCard } from './EditableProfileCard';
import { profileReducer } from '../../model/slice/profileSlice';

const profile: Profile = {
  id: '1',
  age: 18,
  city: 'Khabarovsk',
  country: Country.Russia,
  currency: Currency.RUB,
  first: 'Александр',
  lastname: 'Коломыцкий',
  username: 'saha230904',
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      dataAuth: {
        id: '1',
        username: 'saha230904',
      },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};
describe('features/EditableProfileCard', () => {
  beforeEach(() => {
    componentRender(<EditableProfileCard />, options);
  });

  test('Cancel in the document', async () => {
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.Edit'));
    expect(screen.getByTestId('EditableProfileCardHeader.Cancel')).toBeInTheDocument();
  });

  test('Is cancel work', async () => {
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.Edit'));

    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
    await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'admin');
    await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'admin');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.Cancel'));

    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue(profile.first);
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue(profile.lastname);
  });

  test('Errors', async () => {
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.Edit'));

    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
    await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.Save'));

    expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
  });

  test('put request', async () => {
    const mockPutReq = jest.spyOn($api, 'put');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.Edit'));

    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'change');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.Save'));

    expect(mockPutReq).toHaveBeenCalled();
  });
});
