import React from 'react'
import './SideBar.css'
import calander from '../../icons/calander.svg'
import location from '../../icons/location.svg'
import email from '../../icons/email.svg'
import linkedIn from '../../icons/linkedin-logo.svg'
import researchGate from '../../icons/researchgate-logo.svg'
import phone from '../../icons/phone.svg'

import Skill from '../skill/Skill'
export default function SideBar(props) {
    let header;
    // adding scroll event listener
    if (props.isDesktop) {
        header = <React.Fragment>
            <div className="Pic" ></div>
            <h1 id="Name">Chems eddine NECHE</h1>
            <div className="Informations">
                <img src={email} id="mail_icon" className="InfoIcons" />
                <p className="InfoText">neche.chemseddine@gmail.com</p>
                <img src={location} id="location_icon" />
                <p className="InfoText">54000 Nancy, France</p>
                <img src={calander} id="calander_icon" />
                <p className="InfoText">25 ans</p>
            </div>
        </React.Fragment>
    } else {
        header = <div className="mobileNav">
            <div className="Pic" ></div>
            <h1 id="Name">Chems eddine NECHE</h1>
            <div className="Informations">
                <img src={email} id="mail_icon" className="InfoIcons" />
                <p className="InfoText">neche.chemseddine@gmail.com</p>
                <img src={location} id="location_icon" />
                <p className="InfoText">54000 Nancy, France</p>
                <img src={calander} id="calander_icon" />
                <p className="InfoText">25 ans</p>

            </div>
        </div>

    }
    return (
        <React.Fragment>
            {props.isDesktop == false && header}

            <div className="SideBar snap-scroll">
                {props.isDesktop == true && header}

                <div className="Container">
                    <p className="Header">Compétences</p>
                    <div className="HorizontalLine"></div>
                    <div className="Skills">
                        <Skill skill_name="Python" level="95" />
                        <Skill skill_name="Java" level="90" />
                        <Skill skill_name="C, C++" level="80" />
                        <Skill skill_name="Machin learning" level="90" />
                        <Skill skill_name="Visualisation des données" level="90" />
                        <Skill skill_name="Creation IHM (JavaFx, Qt, PyQt)" level="80" />
                        <Skill skill_name="Front end (html, css, javascript, Reactjs)" level="80" />
                        <Skill skill_name="SQL et bases de données" level="85" />
                    </div>

                </div>
                <div className="Container">
                    <p className="Header">langues</p>
                    <div className="HorizontalLine"></div>
                    <div className="Skills">
                        <Skill skill_name="Français" level="90" />
                        <Skill skill_name="Arabe" level="95" />
                        <Skill skill_name="Anglais" level="80" />
                    </div>

                </div>

                <div className="logo_container">
                    <a href="https://www.linkedin.com/in/chemseddine-neche-457a5b159/" target="_blank" rel="noopener noreferrer"><img src={linkedIn} alt="LinkedIn_logo" /></a>
                    <a href="https://www.researchgate.net/profile/Neche_Chems_Eddine" target="_blank" rel="noopener noreferrer"><img src={researchGate} alt="ResearchGate_logo" /></a>
                </div>

            </div>

        </React.Fragment>

    )
}
