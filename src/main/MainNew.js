import React from 'react';
import styles from './MainNew.module.css';
import photoJpg from "../assets/img/photo_2020-03-06_12-56-08.jpg";


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
                <span> My name is Nikita <span>Tatishchev</span>
          </span>
                <h1> Front-end developer</h1>
            </div>
        </div>
    )
}

export default MainNew