/*
 * Import
 */
import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Signup } from './Signup'

/*
 * Test
 */
describe('App', () => {
  it('全ての要素に正しい値が入力されている場合はボタンが有効化されている', () => {
    const mock = jest.fn()
    const utils = render(
      <Signup
        name="name"
        nameHandler={mock}
        email="example@gmail.com"
        emailHandler={mock}
        password="Password1234"
        passwordHandler={mock}
        signup={mock}
        error={false}
        errorHandler={mock}
      />
    )

    const button = utils.queryByText('Sign up for Bookmarks')
    expect(button).toBeEnabled()
  })

  it('入力されていない要素がある場合はボタンが無効化されている', () => {
    const mock = jest.fn()
    const utils = render(
      <Signup
        name="name"
        nameHandler={mock}
        email="example@gmail.com"
        emailHandler={mock}
        password=""
        passwordHandler={mock}
        signup={mock}
        error={false}
        errorHandler={mock}
      />
    )

    const button = utils.queryByText('Sign up for Bookmarks')
    expect(button).toBeDisabled()
  })

  it('正しい値が入力されていない場合はボタンが無効化されている', () => {
    const mock = jest.fn()
    const utils = render(
      <Signup
        name="name"
        nameHandler={mock}
        email="example@gmail.com"
        emailHandler={mock}
        password="pass"
        passwordHandler={mock}
        signup={mock}
        error={true}
        errorHandler={mock}
      />
    )
    utils.debug()

    const button = utils.queryByText('Sign up for Bookmarks')
    expect(button).toBeDisabled()
  })
})
