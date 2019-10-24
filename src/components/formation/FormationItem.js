import React from 'react'
import './FormationItem.css'
export default function FormationItem(props) {
    let time_line = {
        backgroundColor: '#FFFFFF'
    }
    return (
        // <div className="diplomaItem">
        //     <p className="duration">{props.duration_from}{"-"}{props.duration_to}</p>
        //     <div className="timeline" style={props.last_item ? time_line : null}>
        //         <div className="time_line_pin" ></div>
        //     </div>
        //     <p className="diploma">{props.post}</p>
        //     <div className="description">
        //         <p className="location">{props.location}</p>
        //         <p className="description"> {props.description}</p>
        //     </div>

        // </div>
        <div className="diplomaItem">
            <p className="Formationduration">{props.duration_from} {"-"} {props.duration_to}</p>
            <div className="timeline" style={props.last_item ? time_line : null}>
                <div className="time_line_pin" ></div>
            </div>
            <p className="diploma">{props.diploma}</p>
            <div className="description marginTimeline">
                <p className="location">{props.location}</p>
                <p className="description">{props.description}</p>
            </div>

        </div>
    )
}
