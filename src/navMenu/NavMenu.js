import React from 'react';
import styles from './NavMenu.module.css';

function NavMenu() {
  return (
    <div className={styles.navMenu}>
      <a href="#main" className={styles.link}>Main</a>
      <a href="#skills" className={styles.link}>Skills</a>
      <a href="#projects" className={styles.link}>My projects</a>
      <a href="#contacts" className={styles.link}>Contact me</a>
    </div>
  );
}

export default NavMenu;
