import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/themeProvider';
import { ArticleListItemSkeleton } from './ArticleListItemSkeleton';
import { ArticleView } from '../../model/consts/articleConsts';

export default {
  title: 'entities/ArticleListItemSkeleton',
  component: ArticleListItemSkeleton,
} as ComponentMeta<typeof ArticleListItemSkeleton>;

const Template: ComponentStory<typeof ArticleListItemSkeleton> = (args) => (
  <ArticleListItemSkeleton {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.args = {};

export const Pink = Template.bind({});
Pink.decorators = [ThemeDecorator(Theme.PINK)];
Pink.args = {};

export const LightBig = Template.bind({});
LightBig.args = {
  view: ArticleView.BIG,
};

export const DarkBig = Template.bind({});
DarkBig.decorators = [ThemeDecorator(Theme.DARK)];
DarkBig.args = {
  view: ArticleView.BIG,
};

export const PinkBig = Template.bind({});
PinkBig.decorators = [ThemeDecorator(Theme.PINK)];
PinkBig.args = {
  view: ArticleView.BIG,
};
