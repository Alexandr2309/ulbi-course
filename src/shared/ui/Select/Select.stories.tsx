import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Currency } from '@/entities/CurrencySelect/model/types/currency';
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
    { value: Currency.RUB, content: 'RUB' },
    { value: Currency.USD, content: 'USD' },
    { value: Currency.EUR, content: 'EUR' },
  ],
  label: 'Укажите валюту',
};
