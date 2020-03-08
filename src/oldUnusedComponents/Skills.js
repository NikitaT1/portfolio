import React from 'react';
import styles from './Skills.module.css';
import BlockTitle from './projects/BlockTitle';
import Skill from './Skill';
//import reactIcon from './assets/img/react-icon.svg'
import Fade from "react-reveal/Fade";

let Skills =(props) => {
  //let react = reactIcon;
  return (
    <div id={"skills"} className={styles.skills}>
      <Fade clear>
      <div className={styles.container}>
        <BlockTitle title={"Мои скиллы"}/>
        <div className={styles.skillsWrapper}>
          <Skill title={"JS"}
                 //icon={react}
                 description={"-------------"} />
          <Skill title={"React"}
                 description={"-------------"} />
          <Skill title={"HTML&CSS"}
                 description={"-------------"} />
          <Skill title={"TypeScript"}
                   description={"-------------"} />
        </div>
        {/*<div className={styles.headerTitle}>
          <h2 className={styles.headerTitle}>Мои скиллы</h2>
          <div className={styles.line}></div>
        </div>
        <div className={styles.skillWrapper}>
          <div className={styles.skill}>
            <div className={styles.icon}>
              <img src="" alt=""/>
            </div>
            <span className={styles.ckillTitle}>----</span>
            <span className={styles.description}>----</span>
          </div>
          <div className={styles.skill}>
            <div className={styles.icon}>
              <img src="" alt=""/>
            </div>
            <span className={styles.ckillTitle}>JS</span>
            <span className={styles.description}>----</span>
          </div>
          <div className={styles.skill}>
            <div className={styles.icon}>
              <img src="" alt=""/>
            </div>
            <span className={styles.ckillTitle}>----</span>
            <span className={styles.description}>----</span>
          </div>
        </div>*/}
      </div>
      </Fade>
    </div>
  );
}

export default Skills;
