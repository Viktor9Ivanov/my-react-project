import React from 'react'
import logo from './logo.svg'
import classes from './Header.module.css'
const Header = () => {
    return (
        // <div>
        <header className={classes.header}>
            <img src={logo} alt="logo" />
            {/* <img src = 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/026/full/react.png' alt='Heder images' /> */}
            <a className={classes}>  My react project</a>
        </header>
        // </div>

    )
}
export default Header
