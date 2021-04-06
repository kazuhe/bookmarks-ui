import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Signup, Props } from './Signup'

export default {
  title: 'BOOKMARKS/Molecules/Signup',
  component: Signup,
} as Meta

const Template: Story<Props> = (args) => <Signup {...args} />

export const Standard = Template.bind({})
Standard.args = {
  name: 'name',
  nameHandler: (e) => console.log(e.target.value),
  email: 'exapmle@gmail.com',
  emailHandler: (e) => console.log(e.target.value),
  password: 'Password1234',
  passwordHandler: (e) => console.log(e.target.value),
  signup: () => console.log('button'),
  error: false,
  errorHandler: (bool) => console.log(bool),
}
