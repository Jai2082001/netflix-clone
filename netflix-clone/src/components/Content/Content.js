import React, { Fragment } from 'react'
import classes from './Content.module.css'

const Content = () => {
    return (
        <Fragment>
            <div className={ classes.contentParent }>
                <div className={ classes.contentChild }>
                    <h1 className={ classes.heading }>Unlimited films, TV programs, and more</h1>
                    <h2 className={ classes.subText }>Watch anywhere, Cancel At Any Time</h2>
                    <div>
                        <input></input>
                        <button>Try it now</button>
                    </div>
                    <h3 className={classes.subText}>Ready to watch? Enter your email to create or restart your memberships</h3>
                </div>
            </div>
        </Fragment>
    )
}

export default Content
