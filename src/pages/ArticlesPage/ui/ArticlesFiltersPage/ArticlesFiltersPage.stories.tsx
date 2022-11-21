import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ArticlesFiltersPage } from './ArticlesFiltersPage';

export default {
  title: 'shared/ArticlesFiltersPage',
  component: ArticlesFiltersPage,
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ArticlesFiltersPage>;

const Template: ComponentStory<typeof ArticlesFiltersPage> = (args) => <ArticlesFiltersPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Pink = Template.bind({});
Pink.args = {};
Pink.decorators = [ThemeDecorator(Theme.PINK)];
