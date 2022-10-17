import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import LoginForm from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
  loginForm: { username: 'admin', password: '223' },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({
  loginForm: { username: 'admin', password: '2' },
}), ThemeDecorator(Theme.DARK)];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [StoreDecorator({
  loginForm: { username: 'admin', password: '223', error: 'Вы ввели неверный логин или пароль' },
})];

export const WithLoading = Template.bind({});
WithLoading.args = {};
WithLoading.decorators = [StoreDecorator({
  loginForm: { username: 'admin', password: '223', isLoading: true },
})];
