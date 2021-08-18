import React, { Fragment } from 'react'
import { useRef } from 'react';
import { useDispatch } from 'react-redux'
import { pageActions } from '../../content-store/content-store';
import { userActions } from '../../content-store/content-store';
import classes from './Content.module.css'

const Content = () => {
    const dispatch = useDispatch();
    const inputRef = useRef()
    const signupHandler = () => {
        if(inputRef.current.value){
        dispatch(userActions.changeWholeUser({ email: inputRef.current.value }))
        dispatch(pageActions.changePage({page: 'signup'}))
        }
    }
    return (
        <Fragment>
            <div className={ classes.contentParent }>
                <div className={ classes.contentChild }>
                    <h1 className={ classes.heading }>Unlimited films, TV programs, and more</h1>
                    <h2 className={ classes.subText }>Watch anywhere, Cancel At Any Time</h2>
                    <h3 className={classes.subText}>Ready to watch? Enter your email to create or restart your memberships</h3>
                    <div className={classes.input}>
                        <input ref={ inputRef } placeholder={'Email Address'} ></input>
                        <button onClick={signupHandler} style={{cursor: 'pointer'}} type='email'>Get Started</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Content
