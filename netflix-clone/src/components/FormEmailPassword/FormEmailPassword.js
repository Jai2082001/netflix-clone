import React from 'react'
import classes from './FormEmailPassword.module.css'

const FormEmailPassword = (props) => {
    return (
        <div>
            <form className={classes.formStyle} >
                <input placeholder='Email Address' style={ props.style}></input>
                <input type="text" placeholder='Password' style={ props.style}/>
                <button className={classes.button}>{ props.text }</button>
            </form>
        </div>
    )
}

export default FormEmailPassword
