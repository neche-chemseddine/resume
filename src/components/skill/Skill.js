import React from 'react'
import './Skill.css'
import { useSpring, animated } from 'react-spring';
export default function Skill(props) {
    const progress_bar_animation = useSpring({
        from: { width: "0%" },
        to: { width: props.level + "%" },
        delay: 1000,
        config: { mass: 1, tension: 180, friction: 12 }
    })

    return (
        <div>
            <h1 className="skill_name">{props.skill_name}</h1>
            <div className="progress_bar">
                <animated.div className="progress_bar progress_fill" style={progress_bar_animation}></animated.div>
            </div>
        </div>
    )
}
