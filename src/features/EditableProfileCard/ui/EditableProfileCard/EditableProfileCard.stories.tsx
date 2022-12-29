import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { EditableProfileCard } from './EditableProfileCard';
import { Profile } from '@/entities/Profile';
import { Country } from '@/entities/CountrySelect';
import { Currency } from '@/entities/CurrencySelect';

const profile: Profile = {
  id: '1',
  age: 18,
  city: 'Khabarovsk',
  country: Country.Russia,
  currency: Currency.RUB,
  first: 'Александр',
  lastname: 'Коломыцкий',
  username: 'saha230904',
};

export default {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
  decorators: [StoreDecorator({
    profile: {
      data: profile,
      form: profile,
      readonly: true,
    },
  })],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
   
};
