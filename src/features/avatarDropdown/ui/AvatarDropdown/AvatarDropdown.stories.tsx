import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/themeProvider';
import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { UserRole } from '@/entities/User';

export default {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
  decorators: [StoreDecorator({
    user: {
      dataAuth: {
        id: '1',
        username: 'Петя',
        avatar: 'https://ulbitv.ru/public/mimetypes/zip-icon-48x48.png',
        roles: [UserRole.ADMIN],
      },
    },
  })],
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Pink = Template.bind({});
Pink.args = {};
Pink.decorators = [ThemeDecorator(Theme.PINK)];
