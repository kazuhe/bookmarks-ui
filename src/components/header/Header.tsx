/*
 * Import
 */
import React from 'react'
import Image from 'next/image'
import { Wrapper } from 'components/wrapper'
import styles from './style.module.scss'

/*
 * DOM
 */
export const Header: React.FC = () => (
  <header className={styles.header}>
    <Wrapper>
      <div className={styles.header_inner}>
        <a href="/">
          <Image
            src="/logo.svg"
            alt="Vercel Logo"
            height={'17.5'}
            width={'125'}
          />
        </a>
      </div>
    </Wrapper>
  </header>
)
