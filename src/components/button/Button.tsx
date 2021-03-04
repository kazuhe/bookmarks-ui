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
  isEnabled?: boolean
  onClick?: () => void
}

/*
 * DOM
 */
export const Button: React.FC<Props> = ({ isEnabled = true, ...props }) => (
  <>
    {props.link ? (
      <Link href={props.link} passHref>
        <a
          className={[styles.btn, !isEnabled ? styles.isDisabled : ''].join(
            ' '
          )}
        >
          {props.label}
        </a>
      </Link>
    ) : (
      <button
        onClick={props.onClick}
        className={[styles.btn, !isEnabled ? styles.isDisabled : ''].join(' ')}
        disabled={!isEnabled}
      >
        {props.label}
      </button>
    )}
  </>
)
