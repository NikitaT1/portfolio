import React from 'react';
import styles from './Project.module.css';


let Project = (props) => {
    return (
        <div className={styles.project}>
            <a href="">
                <div className={styles.projectImg} style={props.style}>
                    <div className={styles.nameProject}>Watch</div>
                    {/*<a className={styles.btnShow} href="">Watch</a>*/}
                </div>
            </a>
            <span className={styles.projectTitle}>{props.title}</span>
            <span className={styles.description}>{props.description}</span>
        </div>
    )
}

export default Project;