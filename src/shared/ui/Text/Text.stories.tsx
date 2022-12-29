import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/themeProvider';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  args: {
    text: 'Текст для примера',
    title: 'Заголовок для компонента',
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.args = {};

export const TitleOnly = Template.bind({});
TitleOnly.args = {
  text: undefined,
};

export const TextOnly = Template.bind({});
TextOnly.args = {
  title: undefined,
};

export const Error = Template.bind({});
Error.args = {
  theme: TextTheme.ERROR,
};
