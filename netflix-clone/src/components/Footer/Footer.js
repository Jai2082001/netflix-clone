import React from 'react'
import classes from './Footer.module.css'

const Footer = (props) => {
    return (
        <div className={classes.footerParent} style={props.style}>
            <div className={ classes.heading }>
                Questions? Call 000-800-040-1843
            </div>
            <div className={ classes.listContainer }>
                <ul>
                    <li>FAQ</li>
                    <li>Investor Relations </li>
                    <li>Privacy</li>
                    <li>Speed Test</li>
                </ul>
                <ul>
                    <li>FAQ</li>
                    <li>Investor Relations </li>
                    <li>Privacy</li>
                    <li>Speed Test</li>
                </ul>
                <ul>
                    <li>FAQ</li>
                    <li>Investor Relations </li>
                    <li>Privacy</li>
                    <li>Speed Test</li>
                </ul>
                <ul>
                    <li>FAQ</li>
                    <li>Investor Relations </li>
                    <li>Privacy</li>
                    <li>Speed Test</li>
                </ul>
            </div>
            
                <select id='Language'>
                    <option>English</option>
                    <option>Hindi</option>
                </select>
        </div>
    )
}

export default Footer