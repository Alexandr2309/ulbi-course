import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, SizeButton, ThemeButton } from './Button';
import 'app/styles/index.scss';

export default {
  title: 'shared/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  children: 'Text',
  size: SizeButton.M,
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  children: 'Text',
  size: SizeButton.L,
};

export const PrimaryExtra = Template.bind({});
PrimaryExtra.args = {
  children: 'Text',
  size: SizeButton.XL,
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ThemeButton.CLEAR,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'Text',
  theme: ThemeButton.CLEAR_INVERTED,
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINED,
};

export const Background = Template.bind({});
Outlined.args = {
  children: 'Text',
  theme: ThemeButton.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
Outlined.args = {
  children: 'Text',
  theme: ThemeButton.BACKGROUND_INVERTED,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINED,
  disabled: true,
};
