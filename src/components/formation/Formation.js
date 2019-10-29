import React from 'react'
import './Formation.css'
import FormationItem from './FormationItem'
import formationList from '../../data/formations'
import { Spring, config } from 'react-spring/renderprops'
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
        <Spring
            from={{ opacity: 0, transform: 'translate3d(50%,0,0)' }}
            to={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
            config={config.gentle}>
            {slideprops =>
                <div style={slideprops} className="diploma_container snap-scroll snap-top-mob_nav">
                    {props.isDesktop == false && <p className="Header">Diplômes et formations</p>}
                    {props.isDesktop == false && <div className="HorizontalLine"></div>}
                    <div className="diploma_list">
                        {formation}
                    </div>

                </div>
            }
        </Spring>
    )
}
