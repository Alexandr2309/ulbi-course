import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '@/app/styles/index.scss';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/themeProvider';
import { Country } from '@/entities/CountrySelect';
import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  args: {
    items: [
      { value: Country.Armenia, content: 'Armenia' },
      { value: Country.Belarus, content: 'Belarus' },
      { value: Country.Kazahstan, content: 'Kazahstan' },
      { value: Country.Russia, content: 'Russia' },
      { value: Country.Ukraine, content: 'Ukraine' },
    ],
  },
  decorators: [
    (Story) => <div style={{ padding: 100 }}><Story /></div>,
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  value: '123',
  items: [
    { content: '1asfasfasf23', value: '123' },
    { content: '1asfasfasf21233', value: '1232' },
  ],
};

export const topLeft = Template.bind({});
topLeft.args = {
  direction: 'top left',
  value: '123',
  items: [
    { content: '1asfasfasf23', value: '123' },
    { content: '1asfasfasf21233', value: '1232' },
  ],
};

export const topRight = Template.bind({});
topRight.args = {
  direction: 'top right',
  value: '123',
  items: [
    { content: '1asfasfasf23', value: '123' },
    { content: '1asfasfasf21233', value: '1232' },
  ],
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
  direction: 'bottom left',
  value: '123',
  items: [
    { content: '1asfasfasf23', value: '123' },
    { content: '1asfasfasf21233', value: '1232' },
  ],
};

export const bottomRight = Template.bind({});
bottomRight.args = {
  direction: 'bottom right',
  value: '123',
  items: [
    { content: '1asfasfasf23', value: '123' },
    { content: '1asfasfasf21233', value: '1232' },
  ],
};
