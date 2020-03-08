import React from 'react';
import styles from './SkillsNew.module.css';


function SkillNew (props)  {
    return (
        <div className={styles.skill}>
            <div className={styles.icon} style={props.style}></div>
            <h3 className={styles.skillTitle}>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    )
}

export default SkillNew