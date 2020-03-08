import React from 'react';
import styles from './Projects.module.css';
import BlockTitle from './BlockTitle';
import Project from "./project/Project";
//import socialnetworkByImg from './assets/img';
import Fade from "react-reveal/Fade";

function Projects() {

  /*const socialNetworkImg = {
    backgroundImage: `url(${socialnetworkByImg})`
  }*/

  return (
    <div id={"projects"} className={styles.projects}>
        <Fade clear>
      <div className={styles.container}>
          <BlockTitle title={"My projects"} />
        <div className={styles.projectsWrapper}>
          <Project title={"Social network"}
                   /*style={socialNetworkImg}*/
                   description={"---------------------"}/>
          <Project title={"Todo list"}
                   description={"---------------------"}/>
          <Project title={"Something else"}
                   description={"---------------------"}/>
          {/*<div className={styles.project}>
            <div className={styles.projectImg}>
              <a className={styles.btnShow} href="">Смотреть</a>
            </div>
            <span className={styles.projectTitle}>Social network</span>
            <span className={styles.description}>---------</span>
          </div>
          <div className={styles.project}>
            <div className={styles.projectImg}>
              <a className={styles.btnShow} href="">Смотреть</a>
            </div>
            <span className={styles.projectTitle}>--------</span>
            <span className={styles.description}>---------</span>
          </div>*/}
        </div>
      </div>
        </Fade >
    </div>
  );
}

export default Projects;
