import React from 'react';
import styles from './SkillsNew.module.css';
import BlockTitle from '../projects/BlockTitle';
import SkillNew from './SkillNew';
import Fade from "react-reveal/Fade";
import reactImg from '../assets/img/iconReact.png';
import jsImg from '../assets/img/iconJS.png';
import htmlcssImg from '../assets/img/htmlcssIcon.jpg';
import typeScriptImg from '../assets/img/typescript.png';
import englishImg from '../assets/img/english.svg';

let SkillsNew =(props) => {

    const reactIcon = {
        backgroundImage: `url(${reactImg})`,
    };

    const jsIcon = {
        backgroundImage: `url(${jsImg})`,
    };

    const htmlcssIcon = {
        backgroundImage: `url(${htmlcssImg})`,
    };

    const typeScriptIcon = {
        backgroundImage: `url(${typeScriptImg})`,
    };

    const englishIcon = {
        backgroundImage: `url(${englishImg})`,
    };

    return (
        <div id={"skills"} className={styles.skills}>
            <Fade clear>
                <div className={styles.container}>
                    <BlockTitle title={"Skills"}/>
                    <div className={styles.skillsWrapper}>
                        <SkillNew title={"JavaScript"}
                                  description={"-------------"}
                                  style={jsIcon}/>
                        <SkillNew title={"React"}
                                  description={"-------------"}
                                  style={reactIcon}/>
                        <SkillNew title={"TypeScript"}
                                  description={"-------------"}
                                  style={typeScriptIcon}/>
                        <SkillNew title={"English"}
                                  description={"Advanced level"}
                                  style={englishIcon}/>
                        <SkillNew title={"HTML&CSS"}
                                  description={"-------------"}
                                  style={htmlcssIcon}/>

                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default SkillsNew;
