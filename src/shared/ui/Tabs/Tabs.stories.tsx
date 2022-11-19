import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { ArticleType } from 'entities/Article';
import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';

const tabs = [
  {
    value: ArticleType.ALL,
    content: 'Все',
  },
  {
    value: ArticleType.IT,
    content: 'Айти',
  },
  {
    value: ArticleType.ECONOMICS,
    content: 'Экономика',
  },
  {
    value: ArticleType.SCIENCE,
    content: 'Наука',
  },
];

export default {
  title: 'shared/Tabs',
  component: Tabs,
  args: {
    tabs,
    value: ArticleType.SCIENCE,
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
