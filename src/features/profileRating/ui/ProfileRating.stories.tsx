import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileRating } from './ProfileRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
  title: 'features/ProfileRating',
  component: ProfileRating,
  decorators: [StoreDecorator({
    user: {
      dataAuth: {
        id: '2',
        avatar: '',
        username: 'fdsf',
        roles: [],
      },
    },
  })],
  args: {
    profileId: '1',
  },
  parameters: {
    mockData: [
      {
        url: `${__API__}/profile-ratings?profileId=1&userId=2`,
        method: 'GET',
        status: 200,
        response: [{
          rate: 5,
        }],
      },
    ],
  },
}as ComponentMeta<typeof ProfileRating>;

const Template: ComponentStory<typeof ProfileRating> = (args) => <ProfileRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
