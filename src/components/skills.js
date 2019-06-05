import React from 'react';

import cSharp from '../images/c.png';
import css from '../images/css.png';
import html from '../images/html.png';
import react from '../images/react.png';
import js from '../images/js.png';
import gatsby from '../images/gatsby.png';
import angular from '../images/angular.png';

function Skills() {
    return(
        <div>
            <p className="content-title">Skills</p>
            <p>
                I have been a professional front-end developer for almost 4 years and I have picked up a lot of different skills 
                and used many different technologies in that time, 
                these are some technologies that I have been using recently:
            </p>
            <div className="row skills-container">
                <div className="skill-i">
                    <img height="90" src={cSharp} alt="C#"/>
                    C#
                </div>
                <div className="skill-i">
                    <img height="90" src={css} alt="Css"/>
                    Css
                </div>
                <div className="skill-i">
                    <img height="90" src={html} alt="html"/>
                    Html
                </div>
                <div className="skill-i">
                    <img height="90" src={js} alt="javascript"/>
                    Javascript
                </div>
                <div className="skill-i">
                    <img height="90" src={react} alt="react"/>
                    React
                </div>
                <div className="skill-i">
                    <img height="90" src={gatsby} alt="gatsbyjs"/>
                    Gatsby
                </div>
                <div className="skill-i">
                    <img height="90" src={angular} alt="angular"/>
                    Angular
                </div>
            </div>
        </div>
    )
}

export default Skills