import React from 'react'
import './Experience.css'
import ExperienceItem from './ExperienceItem'
import experienceList from '../../data/Experiences'
import { Spring, config } from 'react-spring/renderprops'
export default function Experience(props) {
    const nb_experiences = experienceList.length;
    let experiences = experienceList.map((obj, i) =>
        <ExperienceItem
            post={obj.post}
            etablisement={obj.etablisement}
            duration_from={obj.duration_from}
            duration_to={obj.duration_to}
            description={obj.description}
            location={obj.location}
            techs={obj.techs}
            last_item={i + 1 === nb_experiences} />);

    return (
        <Spring
            from={{ opacity: 0, transform: 'translate3d(-50%,0,0)' }}
            to={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
            config={config.gentle}
        >
            {slideprops =>
                <div style={slideprops} className="Experience_container snap-scroll snap-top-mob_nav">
                    {props.isDesktop === false && <p className="Header">Expériences</p>}
                    {props.isDesktop === false && <div className="HorizontalLine"/>}

                    <div className="experience_list">
                        {experiences}
                    </div>

                </div>
            }
        </Spring >
    )
}
