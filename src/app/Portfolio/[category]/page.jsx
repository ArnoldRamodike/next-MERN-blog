import React from 'react';
import styles from './page.module.css'
import Button from '@/components/buttton/Button';
import Image from 'next/image';
import {items} from './data.js';

const getData = (cat) => {
  const data = items[cat]
  if (data) {
    return data
  }
  return notFound();
}

const Category = ({params}) => {
  const data = getData(params.category)

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((item) => (
      <div className={styles.item} key={item.id}>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>{item.desc}</p>
          <Button text="see more" url="#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image fill={true} src={item.image} alt="/1.png" className={styles.img} />
        </div>
      </div>
      ))}
      {/* <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="see more" url="#"/>
        </div>
        <div className={styles.imgContainer}>
          <Image fill={true} src="/2.png" alt='' className={styles.img} />
        </div>
      </div> */}
    </div>
  )
}

export default Category