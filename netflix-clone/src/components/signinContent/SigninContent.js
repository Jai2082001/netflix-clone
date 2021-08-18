import React, { Fragment } from 'react'
import classes from './SigninContent.module.css'
import { useDispatch } from 'react-redux'
import { pageActions } from '../../content-store/content-store'
import FormEmailPassword from '../FormEmailPassword/FormEmailPassword'
const SigninContent = () => {
    const dispatch = useDispatch();
    const signUpOpener = () => {
        dispatch(pageActions.changePage({page: 'home'}))
    }
    return (
        <Fragment>
            <div className={classes.signInDivParent}>
                <div className={classes.signInDiv}>
                    <h1 style={{color: 'white'}}>Sign in</h1>
                    <FormEmailPassword text={ 'Sign up' }></FormEmailPassword>
                    <div className={classes.otherThings}>
                        <div className={classes.rememberSection}>
                            <div><input type='checkbox' id='remember'></input><label htmlFor="remember" > Remember Me</label></div>
                            <div>Need Help</div>
                        </div>
                        <div>
                        <div style={{cursor: 'pointer'}}>
                            <p>
                            Login Through Facebook
                            </p>
                        </div>
                        </div>
                        <div style={{fontSize: '18px'}}>
                            New to Netflix <button style={{
                                border: 'none', background: 'none', fontSize: '18px', color: 'white', cursor: 'pointer'
                            }} onClick={ signUpOpener }>Sign Up now</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SigninContent