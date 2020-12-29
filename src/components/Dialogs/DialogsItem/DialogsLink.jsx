import React from 'react'
import { NavLink } from 'react-router-dom'


const DialogsLink = (props) => {
    return (
        <div>
        {Object.keys(props.name).map(n => {
            return (
                <div key={n} className={props.styles.text}>
                    <NavLink to={props.name[n]}
                        activeClassName={props.styles.activeLink}>
                        {n}
                    </NavLink>
                </div>
            )
        })}
    </div>
    );
}
export default DialogsLink 