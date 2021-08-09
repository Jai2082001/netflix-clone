import React, { Fragment } from 'react'
import classes from './Introcard.module.css'

const Introcard = (props) => {
    return (
    <Fragment>
            <div className={classes.introCard} style={ props.style }>
            { props.children}
        </div>
    </Fragment>
    )
}

export default Introcard