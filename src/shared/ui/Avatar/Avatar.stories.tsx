import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';
import avatarPng from './storybook_ava.png';

export default {
  title: 'shared/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  src: avatarPng,
  size: 150,
};

export const Small = Template.bind({});
Small.args = {
  src: avatarPng,
  size: 50,
};
