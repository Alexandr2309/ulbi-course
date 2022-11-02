import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Country } from 'entities/CountrySelect';
import { Currency } from 'entities/CurrencySelect';
import avatarTest from 'shared/assets/tests/test_ava.png';
import { ValidateProfileErrors } from 'entities/Profile/model/types/profile';
import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => (
  <ProfilePage />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
  profile: {
    form: {
      lastname: 'Коломыцкий',
      first: 'Саша',
      age: 18,
      username: 'Sasha23',
      country: Country.Russia,
      currency: Currency.RUB,
      city: 'Хабаровск',
      avatar: avatarTest,
    },
  },
})];

export const WithError = Template.bind({});
WithError.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: {
      lastname: 'Коломыцкий',
      first: 'Саша',
      age: 18,
      username: 'Sasha23',
      country: Country.Russia,
      currency: Currency.RUB,
      city: 'Хабаровск',
      avatar: avatarTest,
    },
    validateErrors: [ValidateProfileErrors.SERVER_ERROR],
  },
})];
WithError.args = {};
