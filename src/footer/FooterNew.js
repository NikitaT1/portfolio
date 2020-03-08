import React from 'react';
import styles from './FooterNew.module.css';
import BlockTitle from "../projects/BlockTitle";
import telegramIcon from './../assets/img/telegram.png';
import viberIcon from './../assets/img/viber.svg';
import phoneIcon from './../assets/img/phone.svg';
// import t from './assets/img/telegram.svg'

function FooterNew () {
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
                    <a className={styles.socialIcon} style={{backgroundImage: `url(${viberIcon})`}}>
                    </a>
                    <a className={styles.socialIcon} style={{backgroundImage: `url(${phoneIcon})`}}>
                    </a>
                </div>
                <span className={styles.copyright}>2020 All rights recieved</span>
            </div>
        </div>
    );
}

export default FooterNew;
