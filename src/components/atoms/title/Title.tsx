/*
 * Import
 */
import React from 'react'
import styles from './style.module.scss'

/*
 * DOM
 */
export const Title: React.FC = () => (
  <div className={styles.title}>
    <h1>Aggregate your knowledge</h1>
    <p className={styles.title_sub}>
      It’s the easiest, fastest way to aggregate knowledge.
    </p>
  </div>
)
