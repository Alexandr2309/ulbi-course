import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from './Select';

export default {
  title: 'shared/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  options: [
    { value: '123', content: 'Первый пункт' },
    { value: '1234', content: 'Второй пункт' },
  ],
  label: 'Укажите валюту',
};
