/*
 * Import
 */
import React from 'react'
import styles from './style.module.scss'

/*
 * Types
 */
export type Props = {
  id: string
  label: string
  value: string | number
  error: boolean
  errorMessage: string
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

/*
 * DOM
 */
export const Input: React.FC<Props> = (props) => (
  <div className={[styles.input, props.error ? styles.isError : ''].join(' ')}>
    <label htmlFor={props.id}>{props.label}</label>
    <input
      id={props.id}
      typeof={props.id}
      type="text"
      value={props.value}
      onChange={props.handler}
      autoComplete={props.id}
    />
    {props.errorMessage ? (
      <p className={styles.errorMessage}>{props.errorMessage}</p>
    ) : (
      ''
    )}
  </div>
)
