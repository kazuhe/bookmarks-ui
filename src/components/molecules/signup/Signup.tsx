/*
 * Import
 */
import React, { useState } from 'react'
import { createUser } from 'utils/helper'
import { Button } from 'components/atoms/button'
import { InputContainer } from 'components/atoms/input'
import styles from './style.module.scss'

/*
 * Types
 */
export type Props = {
  name: string
  nameHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
  email: string
  emailHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
  password: string
  passwordHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
  signup: () => void
  error: boolean
  errorHandler: (error: boolean) => void
}

/*
 * DOM
 */
export const Signup: React.FC<Props> = (props) => (
  <form className={styles.signup}>
    <InputContainer
      id="username"
      label="Name and ID"
      value={props.name}
      validationType="lowercaseHalfWidth"
      handler={props.nameHandler}
      errorHandler={props.errorHandler}
    />
    <InputContainer
      id="email"
      label="Email"
      value={props.email}
      validationType="email"
      handler={props.emailHandler}
      errorHandler={props.errorHandler}
    />
    <InputContainer
      id="password"
      label="Password"
      value={props.password}
      validationType="password"
      handler={props.passwordHandler}
      errorHandler={props.errorHandler}
    />
    <div className={styles.button}>
      <Button
        label="Sign up for Bookmarks"
        wide
        isEnabled={
          props.name && props.email && props.password && !props.error
            ? true
            : false
        }
        onClick={props.signup}
      />
    </div>
  </form>
)

/*
 * Container
 */
export const SignupContainer: React.FC = () => {
  // Name
  const [name, setName] = useState('')
  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value)
  }

  // Email
  const [email, setEmail] = useState('')
  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value)
  }

  // Password
  const [password, setPassword] = useState('')
  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value)
  }

  // Error
  const [error, setError] = useState(false)
  const errorHandler = (iseError: boolean): void => {
    setError(iseError)
  }

  // signup 新規ユーザーをPOST
  const signup = () => {
    const data = {
      name: name,
      email: email,
      password: password,
    }
    createUser(data)
  }

  return (
    <Signup
      name={name}
      nameHandler={nameHandler}
      email={email}
      emailHandler={emailHandler}
      password={password}
      passwordHandler={passwordHandler}
      signup={signup}
      error={error}
      errorHandler={errorHandler}
    />
  )
}
