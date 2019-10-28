import React from 'react'
import './Formation.css'
import FormationItem from './FormationItem'
import formationList from '../../data/formations'
export default function Formation(props) {

    const nb_experiences = formationList.length;
    let formation = formationList.map((obj, i) =>
        <FormationItem
            diploma={obj.diploma}
            etablisement={obj.etablisement}
            duration_from={obj.duration_from}
            duration_to={obj.duration_to}
            description={obj.description}
            location={obj.location}
            last_item={i + 1 === nb_experiences} />);
    return (

        <div className="diploma_container snap-scroll snap-top-mob_nav">
            {props.isDesktop == false && <p className="Header">Diplôme et formation</p>}
            {props.isDesktop == false && <div className="HorizontalLine"></div>}
            <div className="diploma_list">
                {formation}
            </div>

        </div>
    )
}
