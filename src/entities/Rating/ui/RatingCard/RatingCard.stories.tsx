import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { RatingCard } from './RatingCard';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'entities/RatingCard',
  component: RatingCard,
  args: {
    title: 'Отличный отзыв',
    rate: 4,
    feedbackTitle: 'Оставьте отзыв пожалуйста',
    hasFeedback: true,
  },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Pink = Template.bind({});
Pink.args = {};
Pink.decorators = [ThemeDecorator(Theme.PINK)];
