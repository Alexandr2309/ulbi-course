import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { StarsRating } from './StarsRating';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/StarsRating',
  component: StarsRating,
} as ComponentMeta<typeof StarsRating>;

const Template: ComponentStory<typeof StarsRating> = (args) => <StarsRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Pink = Template.bind({});
Pink.args = {};
Pink.decorators = [ThemeDecorator(Theme.PINK)];
