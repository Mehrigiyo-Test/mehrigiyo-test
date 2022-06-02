import React from 'react'
import styles from './Button.module.scss'
const Button = ({title}) => {
  return (
    <section className={styles.button}>
        {title}
    </section>
  )
}

export default Button