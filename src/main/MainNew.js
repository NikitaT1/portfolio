import React from 'react';
import styles from './MainNew.module.css';
import photoJpg from "../assets/img/ptmk.png";


const MainNew = () => {

    const photo = {
        backgroundImage: `url(${photoJpg})`,
    };

    return (
        <div id={"main"} className={styles.mainNew}>
            <div className={styles.photo} style={photo}>
            </div>
            <div className={styles.greeting}>
                <span> Hi! </span>
                <span> My name is <span className={styles.name}>Nikita Tatishchev</span>
          </span>
                <h1> Front-end developer</h1>
            </div>
        </div>
    )
}

export default MainNew