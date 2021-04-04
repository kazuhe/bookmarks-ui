/*
 * Import
 */
import React, { useState, useEffect } from 'react'
import validator from 'validator'
import styles from './style.module.scss'

/*
 * Types
 */
export type Props = {
  id: string
  label: string
  value: string
  error: boolean
  errorMessage: string
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type ContainerProps = {
  id: string
  label: string
  value: string
  validationType: 'lowercaseHalfWidth' | 'email' | 'password'
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void
  errorHandler: (error: boolean) => void
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

/*
 * Container
 */
export const InputContainer: React.FC<ContainerProps> = (props) => {
  // バリデーションチェックのエラー管理
  const [error, setError] = useState({ state: false, message: '' })
  const errorHandler = (value: string): void => {
    if (value) {
      switch (props.validationType) {
        case 'lowercaseHalfWidth':
          console.log('lowercaseHalfWidth')
          // 小文字半角英数
          if (value.match(/^[a-z0-9]*$/)) {
            setError({ state: false, message: '' })
            props.errorHandler(false)
          } else {
            setError({
              state: true,
              message: '小文字半角英数字で入力してください',
            })
            props.errorHandler(true)
          }
          break

        case 'email':
          console.log('email')
          if (validator.isEmail(value)) {
            setError({ state: false, message: '' })
            props.errorHandler(false)
          } else {
            setError({
              state: true,
              message: '正しいメールアドレスを入力してください',
            })
            props.errorHandler(true)
          }
          break

        case 'password':
          console.log('password')
          // 小文字大文字の半角英字と数字をそれぞれ1種類以上を含み8文字~100文字
          if (
            value.match(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,100}$/)
          ) {
            setError({ state: false, message: '' })
            props.errorHandler(false)
          } else {
            setError({
              state: true,
              message: '大文字を含む半角英数字を8文字以上入力してください',
            })
            props.errorHandler(true)
          }
          break
      }
    }
  }

  // input要素に変更があればバリデーションチェックを実行
  useEffect(() => {
    errorHandler(props.value)
  }, [props.value])

  return (
    <Input
      id={props.id}
      label={props.label}
      value={props.value}
      error={error.state}
      errorMessage={error.message}
      handler={props.handler}
    />
  )
}
