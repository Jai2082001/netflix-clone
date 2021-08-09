import React, { useState } from 'react'
import classes from './FAQSection.module.css'

const FAQSection = (props) => {
    const clickHandler = () => {
        changeShow((prevState) => {
            return !prevState
        })
    }
    const [show, changeShow] = useState(false)
    return (
        <>
            <div className={ classes.parentSec }>
            <div className={ classes.faqSection} onClick={clickHandler}>
                <div className={classes.answerSection}>{props.heading}{!show && <i className="fas fa-plus"></i>}{ show && <i className="fas fa-times"></i> }</div>
            </div> 
            {show && <div className={classes.answerSec} style={ {display: 'block'} }>
                { props.content }
                </div>
            }
            </div>
        </>
    )
}

export default FAQSection