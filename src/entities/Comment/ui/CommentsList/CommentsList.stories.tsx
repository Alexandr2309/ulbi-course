import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/themeProvider';
import avatar from '@/shared/assets/tests/test_ava.png';
import { CommentsList } from './CommentsList';

export default {
  title: 'entities/CommentsList',
  component: CommentsList,
  args: {
    comments: [
      {
        text: 'Отлично',
        id: '2',
        user: {
          username: 'user',
          avatar,
          id: '1',
        },
      },
      {
        text: 'Отлично',
        id: '2',
        user: {
          username: 'user',
          avatar,
          id: '1',
        },
      },
      {
        text: 'Отлично',
        id: '2',
        user: {
          username: 'user',
          avatar,
          id: '1',
        },
      },
    ],
  },
} as ComponentMeta<typeof CommentsList>;

const Template: ComponentStory<typeof CommentsList> = (args) => <CommentsList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Pink = Template.bind({});
Pink.args = {};
Pink.decorators = [ThemeDecorator(Theme.PINK)];

export const NormalLoading = Template.bind({});
NormalLoading.args = {
  isLoading: true,
};

export const DarkLoading = Template.bind({});
DarkLoading.args = {
  isLoading: true,
};
DarkLoading.decorators = [ThemeDecorator(Theme.DARK)];

export const PinkLoading = Template.bind({});
PinkLoading.args = {
  isLoading: true,
};
PinkLoading.decorators = [ThemeDecorator(Theme.PINK)];

export const NormalEmpty = Template.bind({});
NormalEmpty.args = {
  comments: [],
};

export const DarkEmpty = Template.bind({});
DarkEmpty.args = {
  comments: [],
};
DarkEmpty.decorators = [ThemeDecorator(Theme.DARK)];

export const PinkEmpty = Template.bind({});
PinkEmpty.args = {
  comments: [],
};
PinkEmpty.decorators = [ThemeDecorator(Theme.PINK)];
