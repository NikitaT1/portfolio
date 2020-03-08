import React from 'react';
import styles from './Slogan.module.css';
import BlockTitle from "./projects/BlockTitle";
import Fade from "react-reveal/Fade";

function Slogan() {
  return (
    <div className={styles.slogan}>
        <Fade clear>
      <div className={styles.container}>
        <BlockTitle title={"Рассматриваю вариант удаленной работы"}/>
        <a className={styles.btnShow} href="">Нанять меня</a>
      </div>
        </Fade>
    </div>
  );
}

export default Slogan;
