import React from 'react'
import classes from './Background.module.css'
// import backgroundImg from '../../images/misc/home-bg.jpg'

const Background = (props) => {
    return (
    <>
        <div className={classes.parentBackground}>
            {props.children}
        </div>
    </>)
}

export default Background