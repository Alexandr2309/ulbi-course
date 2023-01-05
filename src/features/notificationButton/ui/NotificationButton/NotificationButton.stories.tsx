import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { NotificationButton } from './NotificationButton';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'features/NotificationButton',
  component: NotificationButton,
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => <NotificationButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Pink = Template.bind({});
Pink.args = {};
Pink.decorators = [ThemeDecorator(Theme.PINK)];
