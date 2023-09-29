"use client";

import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import DarkModeToogle from '../DarkModeToogle/DarkModeToogle';
import { signOut, useSession } from 'next-auth/react';

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/Portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const NavBar = () => {
  const session = useSession();
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>riccoBlog</Link>
      <div className={styles.links}>
        <DarkModeToogle  />
         {links.map((links) => (
          <Link key={links.id} href={links.url} className={styles.links}>
            {links.title}
          </Link>
         ))}

         { session.status === "authenticated" &&(
      <button className={styles.logout} onClick={signOut}>
          Logout
      </button>)}
      </div>
    </div>
  )
}

export default NavBar
