import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Input, Props } from './Input'

export default {
  title: 'BOOKMARKS/Atoms/Input',
  component: Input,
} as Meta

const Template: Story<Props> = (args) => <Input {...args} />

export const Standard = Template.bind({})
Standard.args = {
  id: 'name',
  label: 'Name',
  value: 'example name',
  error: false,
  errorMessage: '',
  handler: (e) => console.log(e.target.value),
}
