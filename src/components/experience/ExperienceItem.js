import React from 'react'
import './ExperienceItem.css'
export default function experienceItem(props) {
    let time_line = {
        backgroundColor: '#FFFFFF'
    }
    return (
        <div className="experienceItem">
            <p className="post">{props.post}</p>
            <div className="timeline" style={props.last_item ? time_line : null}>
                <div className="time_line_pin" ></div>
            </div>
            <p className="etablisement">{props.etablisement}</p>
            <p className="duration">{props.duration_from} <br /> {props.duration_to}</p>
            <div className="description marginTimeline">
                <p className="location">{props.location}</p>
                <p className="description"> {props.description}</p>
                <p className="tech_header">Technologies utilisées:</p>
                <p className="techs">{props.techs}</p>

            </div>

        </div>
    )
}
