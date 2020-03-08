import React from 'react';
import styles from './Main.module.css';
import Fade from "react-reveal/Fade";
import Particles from "react-particles-js";


const particleOpt = {
    particle: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 1000
            }
        }
    }
}

function Main() {
    return (
        <div id={"main"} className={styles.main}>
            <Fade clear>
                <div className={styles.container}>
                    <Particles className={styles.particles} params={particleOpt}/>
                    <div className={styles.greeting}>
                        <span> Привет! </span>
                        <span> Я Никита <span>Татищев</span>
          </span>
                        <h1> Front-end разработчик</h1>
                    </div>
                    <div className={styles.photo}>
                        <div className={styles.image}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Main;
