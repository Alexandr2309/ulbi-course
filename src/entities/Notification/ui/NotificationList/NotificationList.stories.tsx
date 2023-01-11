import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [
        {
          id: '1',
          title: 'Уведомление 1',
          description: 'Пример для тебя',
          userId: '2',
          href: '1',
        },
        {
          id: '2',
          title: 'Уведомление 2',
          description: 'Пример для тебя',
          userId: '2',
          href: '1',
        },
        {
          id: '3',
          title: 'Уведомление 3',
          description: 'Пример для тебя',
          userId: '2',
          href: '1',
        },
      ],
    },
  ],
};
