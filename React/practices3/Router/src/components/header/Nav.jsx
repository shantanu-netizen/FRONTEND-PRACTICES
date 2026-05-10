import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Nav.module.css'
export default function Nav() {
  return (
    <div>
      <h1 className={styles.title}>Opener</h1>
      <ul className={styles.Nav}>
        <li className={styles.Link}><Link to={'/'}>Home</Link></li>
        <li className={styles.Link}><Link to={'/about'}>About</Link></li>
        <li className={styles.Link}><Link to={'/Blog'}>Blog</Link></li>
      </ul>
      <button className={styles.button}>join</button>
    </div>
  )
}
