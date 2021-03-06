/*
 * Import
 */
import React from 'react'
import { Button } from 'components/button'
import styles from './style.module.scss'

/*
 * Types
 */
export type Props = {
  link?: string
  label?: string
  isEnabled?: boolean
  onClick?: () => void
}

/*
 * DOM
 */
export const Signup: React.FC<Props> = () => (
  <form className={styles.signup}>
    <div className={styles.signup_item}>
      <label htmlFor="username">Name and ID</label>
      <input
        id="username"
        typeof="username"
        type="text"
        autoComplete="username"
      />
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
