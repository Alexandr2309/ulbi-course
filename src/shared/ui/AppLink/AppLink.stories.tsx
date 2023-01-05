import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
  <AppLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  theme: AppLinkTheme.PRIMARY,
  children: 'Some text',
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.args = {
  theme: AppLinkTheme.SECONDARY,
  children: 'Some text',
};

export const PrimaryInDarkTheme = Template.bind({});
PrimaryInDarkTheme.args = {
  theme: AppLinkTheme.PRIMARY,
  children: 'Some text',
};
PrimaryInDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryInDarkTheme = Template.bind({});
SecondaryInDarkTheme.args = {
  theme: AppLinkTheme.SECONDARY,
  children: 'Some text',
};
SecondaryInDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];
