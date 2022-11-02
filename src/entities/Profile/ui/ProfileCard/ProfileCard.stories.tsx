import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Country } from 'entities/CountrySelect';
import { Currency } from 'entities/CurrencySelect';
import avatarTest from 'shared/assets/tests/test_ava.png';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  data: {
    lastname: 'Коломыцкий',
    first: 'Саша',
    age: 18,
    username: 'Sasha23',
    country: Country.Russia,
    currency: Currency.RUB,
    city: 'Хабаровск',
    avatar: avatarTest,
  },
};

export const WithError = Template.bind({});
WithError.decorators = [];
WithError.args = {
  error: 'Ошибка сервера при сохранении',
};

export const Loading = Template.bind({});
Loading.decorators = [ThemeDecorator(Theme.DARK)];
Loading.args = {
  isLoading: true,
};
