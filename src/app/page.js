'use client';
import styles from './page.module.scss'
import { useState } from 'react';
import Header from './components/header';
import Menu from './components/menu';
import CenteredPixelTransition from './components/pixelBackground/centered/index.jsx';
 
 

export default function Home() {
  const [menuIsActive, setMenuIsActive] = useState(false);
  return (
    <main className={styles.main}>
      <Header menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive}/>
      <Menu menuIsActive={menuIsActive}/>
      <CenteredPixelTransition menuIsActive={menuIsActive}/>
     
      
    </main>
  )
}