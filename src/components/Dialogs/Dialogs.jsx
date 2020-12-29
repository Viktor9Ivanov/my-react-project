import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Dialogs.module.css'

const Message = (props) => {
    return <div className={style.message}>{props.message}</div>
}

const Dialogs = () => {
    const name = {
        Aaaaa: '/dialogs/1',
        Bbbbb: '/dialogs/2',
        Ccccc: '/dialogs/3',
        Eeeee: '/dialogs/4',
        Fffff: '/dialogs/5'
    }
    return (
        <div className={style.div}>
            <div>
                {Object.keys(name).map(elem => {
                    return (
                        <div key={elem} className={style.text}>
                            <NavLink to={name[elem]}
                                activeClassName={style.activeLink}>
                                {elem}
                            </NavLink>
                        </div>
                    )
                })}
            </div>
            <div>
                <Message message='Hi !' />
                <Message message='Hi hi!' />
                <Message message='Hi hi hi !' />
            </div>
        </div>
    );
}
export default Dialogs