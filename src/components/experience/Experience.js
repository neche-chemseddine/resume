import React from 'react'
import './Experience.css'
import ExperienceItem from './ExperienceItem'
import experienceList from '../../data/Experiences'
export default function Experience() {
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
        <div className="Experience_container">

            <div className="experience_list">
                {experiences}
            </div>

        </div>
    )
}
