import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Button, Props } from './Button'

export default {
  title: 'BOOKMARKS/Button',
  component: Button,
} as Meta

const Template: Story<Props> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Button',
}
