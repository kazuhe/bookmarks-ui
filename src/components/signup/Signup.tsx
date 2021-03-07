/*
 * Import
 */
import React, { useState, useEffect } from 'react'
import validator from 'validator'
import { Button } from 'components/button'
import { Input } from 'components/input'
import styles from './style.module.scss'

/*
 * Types
 */
type InputType = {
  value: string
  error: boolean
  message: string
}

export type Props = {
  name: InputType
  nameHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
  email: InputType
  emailHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
  password: InputType
  passwordHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
  buttonState: boolean
}

/*
 * DOM
 */
export const Signup: React.FC<Props> = (props) => (
  <form className={styles.signup}>
    <Input
      id="username"
      label="Name and ID"
      value={props.name.value}
      error={props.name.error}
      errorMessage={props.name.message}
      handler={props.nameHandler}
    />
    <Input
      id="email"
      label="Email"
      value={props.email.value}
      error={props.email.error}
      errorMessage={props.email.message}
      handler={props.emailHandler}
    />
    <Input
      id="password"
      label="Password"
      value={props.password.value}
      error={props.password.error}
      errorMessage={props.password.message}
      handler={props.passwordHandler}
    />
    <div className={styles.button}>
      <Button
        label="Sign up for Bookmarks"
        wide
        isEnabled={props.buttonState}
        onClick={() => {
          console.log('Sign up for Bookmarks')
        }}
      />
    </div>
  </form>
)

/*
 * Container
 */
export const SignupContainer: React.FC = () => {
  // 小文字のみ半角英字と数字以外が含まれていれば'false'を返却
  const patternCheck = (value: string): boolean => {
    return value.match(/^[a-z0-9]*$/) ? true : false
  }

  // 小文字大文の半角英字と数字をそれぞれ1種類以上で8文字~100文字
  const passWordCheck = (value: string): boolean => {
    return value.match(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,100}$/)
      ? true
      : false
  }

  const intialState = { value: '', error: false, message: '' }

  // Name
  const [name, setName] = useState(intialState)
  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value
    if (!value) {
      setName({ value: value, error: true, message: '入力してください' })
    } else if (!patternCheck(value)) {
      setName({
        value: value,
        error: true,
        message: '小文字半角英数字で入力してください',
      })
    } else {
      setName({ value: value, error: false, message: '' })
    }
  }

  // Email
  const [email, setEmail] = useState(intialState)
  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value
    if (!value) {
      setEmail({ value: value, error: true, message: '入力してください' })
    } else if (!validator.isEmail(value)) {
      setEmail({
        value: value,
        error: true,
        message: '正しいメールアドレスを入力してください',
      })
    } else {
      setEmail({ value: value, error: false, message: '' })
    }
  }

  // Password
  const [password, setPassword] = useState(intialState)
  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value
    if (!value) {
      setPassword({ value: value, error: true, message: '入力してください' })
    } else if (!passWordCheck(value)) {
      setPassword({
        value: value,
        error: true,
        message: '大文字を含む半角英数字を8文字以上入力してください',
      })
    } else {
      setPassword({ value: value, error: false, message: '' })
    }
  }

  // Button 全て入力されていてエラーがなければ'true'を返却
  const [buttonState, setButtonState] = useState(false)
  useEffect(() => {
    const value = name.value && email.value && password.value ? true : false
    const error = !name.error && !email.error && !password.error
    if (value && error) {
      setButtonState(true)
    } else {
      setButtonState(false)
    }
  }, [
    name.value,
    name.error,
    email.value,
    email.error,
    password.value,
    password.error,
  ])

  return (
    <Signup
      name={name}
      nameHandler={nameHandler}
      email={email}
      emailHandler={emailHandler}
      password={password}
      passwordHandler={passwordHandler}
      buttonState={buttonState}
    />
  )
}
