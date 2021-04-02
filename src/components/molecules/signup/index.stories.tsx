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
  name: 'Name',
  nameHandler: (e) => console.log(e.target.value),
  email: 'Email',
  emailHandler: (e) => console.log(e.target.value),
  password: 'Password',
  passwordHandler: (e) => console.log(e.target.value),
  buttonState: false,
  signup: () => console.log('button'),
}
