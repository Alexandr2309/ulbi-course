import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/themeProvider'
import { NotificationList } from './NotificationList'

export default {
  title: 'shared/NotificationList',
  component: NotificationList,
} as ComponentMeta<typeof NotificationList>

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Pink = Template.bind({})
Pink.args = {}
Pink.decorators = [ThemeDecorator(Theme.PINK)]