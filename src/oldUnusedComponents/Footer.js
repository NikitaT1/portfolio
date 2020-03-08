import React from 'react';
import styles from './Footer.module.css';
import BlockTitle from "./projects/BlockTitle";
import telegramIcon from './assets/img/telegram.png'

// import t from './assets/img/telegram.svg'

function Footer () {
    // const telegramIcon = {
    //     backgroundImage: `url(' + "./assets/img/telegram.png" + ')`,
    // };
    //

    return (
        <div className={styles.footer}>

            <div className={styles.container}>
                <BlockTitle title={"Nikita Tatishchev"} />
                <div className={styles.socialBlock}>
                        <a className={styles.socialIcon} style={{backgroundImage: `url(${telegramIcon})`}}>
                        </a>

                    <div className={styles.socialIcon}>

                    </div>
                    <div className={styles.socialIcon}></div>
                    <div className={styles.socialIcon}></div>
                </div>
                <span className={styles.copyright}>2020 All rights recieved</span>
            </div>
        </div>
    );
}

export default Footer;
