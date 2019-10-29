import React, { useState } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
export default function Nav() {
    const [selected, setSelected] = useState(true)
    let getselected = (i) => {
        if (i === 1 & selected || i === 2 & !selected) {
            return "nav_links selected";
        }
        return "nav_links";
    }
    return (
        <div className="nav">
            <div className="navGrid">
                <Link to="/" className={getselected(1)} onClick={() => setSelected(true)} > Expériences</Link>
                <Link to="/formations" className={getselected(2)} onClick={() => setSelected(false)}> Diplômes et formations</Link>
            </div>

        </div>
    )
}
