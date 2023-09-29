import React from 'react'
import styles from './contact.module.css'
import contact from 'public/contact.png';
import Button from '@/components/buttton/Button';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Let's be in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
        <Image src={contact} fill={true} alt='Banner'  className={styles.image}/>
        </div>
        <form className={styles.form}>
          <input type="text" placeholder='name' className={styles.input} />
          <input type="text" placeholder='email' className={styles.input} />
          <textarea className={styles.textArea} placeholder='message' cols="30" rows="10" />
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  )
}

export default Contact