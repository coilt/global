// Header.jsx

import { useState } from 'react';
import styles from './style.module.scss';

export default function Header({ menuIsActive, setMenuIsActive }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  }

  return (
    <div 
      className={`${styles.header} ${menuIsActive ? styles.menuOpen : ''}`}
      onClick={() => setMenuIsActive(!menuIsActive)} 
    >
      <div 
        className={`${styles.burger} ${menuIsActive ? styles.burgerActive : ''}`}
      />
    </div>
  )

}