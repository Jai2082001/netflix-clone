import React, { Fragment } from 'react'
import classes from './SigninContent.module.css'

const SigninContent = () => {
    return (
        <Fragment>
            <div className={classes.signInDivParent}>
                <div className={classes.signInDiv}>
                    <h1 style={{color: 'white'}}>Sign in</h1>
                    <form className={ classes.signinForm}>
                        <input placeholder='Email Address'></input>
                        <input type="text" placeholder='Password' />
                        <button className={ classes.button }>SignIn</button>
                    </form>
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
                                border: 'none', background: 'none', fontSize: '18px', color : 'white', cursor: 'pointer' 
                            }}>Sign Up now</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SigninContent