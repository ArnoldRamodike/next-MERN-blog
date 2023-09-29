import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}></h1>
        <div className={styles.items}>
          <Link href="/Portfolio/illustrations" className={styles.item}>
          <span className={styles.title}>Illustrations</span>
          </Link>
          <Link href="/Portfolio/websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
          </Link>
          <Link href="/Portfolio/applications" className={styles.item}>
          <span className={styles.title}>Applications</span>
          </Link>
        </div>
    </div>
  )
}

export default Portfolio