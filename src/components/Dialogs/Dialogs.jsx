import React from 'react'
import { NavLink } from 'react-router-dom'
import stl from './Dialogs.module.css'


const Dialogs = () => {
    const name = {
        Aaaaa: '/dialogsLink',
        Bbbbb: '/bbbbb',
        Ccccc: '/ccccc',
        Eeeee: '/eeeee',
        Fffff: '/fffff'
    }
    return (
        <div className={stl.divColor}>
						{Object.keys(name).map(elem => {
							return (
								<div key={elem} className= {stl.text}>
									<NavLink to={name[elem]} activeClassName={stl.color}>
										{elem}
									</NavLink>
								</div>
							)
						})}

          </div>
    );
}
export default Dialogs