/*
 * Import
 */
import React from 'react'
import Image from 'next/image'
import styles from './style.module.scss'

// DOM
export const Header: React.FC = () => (
  <header className={styles.header}>
    <div>
      <a href="/">
        <Image src="/vercel.svg" alt="Vercel Logo" height={'32'} width={'64'} />
      </a>
    </div>
  </header>
)
