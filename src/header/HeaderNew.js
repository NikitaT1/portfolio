import React from 'react';
import styles from './HeaderNew.module.css';
import NavMenu from "../navMenu/NavMenu";

function HeaderNew() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <NavMenu />
      </div>
    </div>
  );
}

export default HeaderNew;
