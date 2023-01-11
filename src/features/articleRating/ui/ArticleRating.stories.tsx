import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
  title: 'features/ArticleRating',
  component: ArticleRating,
  decorators: [StoreDecorator({
    user: {
      dataAuth: {
        id: '1',
        roles: [],
        avatar: '',
        username: 'fdsfsd',
      },
    },
  })],
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  articleId: '1',
};
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?articleId=1&userId=1`,
      method: 'GET',
      status: 200,
      response: [{
        rate: 4,
      }],
    },
  ],
};
