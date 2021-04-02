/*
 * Import
 */
import React from 'react'
import Link from 'next/link'
import styles from './style.module.scss'

/*
 * Types
 */
export type Props = {
  link?: string
  label: string
  wide?: boolean
  isEnabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

/*
 * DOM
 */
export const Button: React.FC<Props> = ({
  isEnabled = true,
  type = 'button',
  ...props
}) => (
  <>
    {props.link ? (
      <Link href={props.link} passHref>
        <a>{props.label}</a>
      </Link>
    ) : (
      <button
        type={type}
        onClick={props.onClick}
        disabled={!isEnabled}
        className={[styles.btn, props.wide ? styles.isWide : ''].join(' ')}
      >
        {props.label}
      </button>
    )}
  </>
)
