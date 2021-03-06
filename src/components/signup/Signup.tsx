/*
 * Import
 */
import React, { useState } from 'react'
import { Button } from 'components/button'
import styles from './style.module.scss'

/*
 * Types
 */
export type Props = {
  name: string
  nameHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

/*
 * DOM
 */
export const Signup: React.FC<Props> = (props) => (
  <form className={styles.signup}>
    <div className={styles.signup_item}>
      <label htmlFor="username">Name and ID</label>
      <input
        id="username"
        typeof="username"
        type="text"
        value={props.name}
        onChange={props.nameHandler}
        autoComplete="username"
      />
      <p>name:{props.name}</p>
    </div>
    <div className={styles.signup_item}>
      <label htmlFor="email">Email</label>
      <input id="email" typeof="email" type="text" autoComplete="email" />
    </div>
    <div className={styles.signup_item}>
      <label htmlFor="password">Password</label>
      <input
        id="password"
        typeof="password"
        type="text"
        autoComplete="password"
      />
    </div>
    <div className={styles.button}>
      <Button
        label="Sign up for Bookmarks"
        wide
        isEnabled={false}
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
  const [name, setName] = useState('')

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value)
    console.log(e)
  }

  return <Signup name={name} nameHandler={nameHandler} />
}
