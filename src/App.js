import React from 'react';
import './App.css';

import Projects from "./projects/Projects";
import MainNew from "./main/MainNew";
import ContactMe from "./contactMe/ContactMe";
import FooterNew from "./footer/FooterNew";
import HeaderNew from "./header/HeaderNew";
import SkillsNew from "./skills/SkillsNew";




function App() {
  return (
    <div className="App">
      <HeaderNew/>
      <MainNew/>
        <SkillsNew/>
        <Projects/>
        {/*<Message/>*/}
        {/*<Slogan/>*/}
        <ContactMe/>
        <FooterNew/>
    </div>
  );
}

export default App;
