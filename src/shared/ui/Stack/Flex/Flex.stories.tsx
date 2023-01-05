import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex } from './Flex';

export default {
  title: 'shared/Flex',
  component: Flex,
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
  gap: '4',
  direction: 'row',
  children: (
    <>
      <div>row</div>
      <div>row</div>
      <div>row</div>
    </>
  ),
};

export const Column = Template.bind({});
Column.args = {
  gap: '4',
  direction: 'column',
  children: (
    <>
      <div>row</div>
      <div>row</div>
      <div>row</div>
    </>
  ),
};

export const ColumnGap8 = Template.bind({});
ColumnGap8.args = {
  gap: '8',
  direction: 'column',
  children: (
    <>
      <div>row</div>
      <div>row</div>
      <div>row</div>
    </>
  ),
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
  gap: '16',
  direction: 'column',
  children: (
    <>
      <div>row</div>
      <div>row</div>
      <div>row</div>
    </>
  ),
};

export const ColumnGap32 = Template.bind({});
ColumnGap32.args = {
  gap: '32',
  direction: 'column',
  children: (
    <>
      <div>row</div>
      <div>row</div>
      <div>row</div>
    </>
  ),
};
