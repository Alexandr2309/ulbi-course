import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Tabs } from './Tabs';
import { Theme } from '@/shared/const/theme';

const tabs = [
  {
    value: 'tab 1',
    content: 'tab 1',
  },
  {
    value: 'tab 2',
    content: 'tab 2',
  },
  {
    value: 'tab 3',
    content: 'tab 3',
  },
];

export default {
  title: 'shared/Tabs',
  component: Tabs,
  args: {
    tabs,
    value: 'tab 2',
    onTabClick: action('tab'),
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Pink = Template.bind({});
Pink.args = {};
Pink.decorators = [ThemeDecorator(Theme.PINK)];
