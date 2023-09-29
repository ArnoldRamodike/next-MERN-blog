"use client";

import React, { useContext } from 'react';
import styles from './DarkModeToogle.module.css'
import { ThemeContext } from '../../context/ThemeContext';

const DarkModeToogle = () => {

    const {toggle, mode} = useContext(ThemeContext )
  return (
    <div className={styles.container} onClick={toggle}>
        <div className={styles.icon}>
            🌙
        </div>
        <div className={styles.icon}>
            🔆
        </div>
        <div className={styles.ball} 
            style={mode === "dark" ? {paddingLeft:"2px"} : {right:"505px"}}></div>
    </div>
  )
}

export default DarkModeToogle