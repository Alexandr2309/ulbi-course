import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { NotificationItem } from './NotificationItem';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'entities/Notification/NotificationItem',
  component: NotificationItem,
  args: {
    item: {
      id: '1',
      title: 'Уведомление 1',
      description: 'Пример для тебя',
      userId: '2',
      href: '1',
    },
  },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Pink = Template.bind({});
Pink.args = {};
Pink.decorators = [ThemeDecorator(Theme.PINK)];
