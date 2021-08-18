import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import classes from './signup.module.css'
import { useState } from 'react'
import Card from '../Card/Card'
import SignUpForm from '../SignUpForm/SignUpForm'
import Plans from '../Plans/Plans'

const Signup = (props) => {
    const [step, changeStep] = useState(0);
    const stateHandler = () => {
        console.log('working' + step)
        changeStep((prevState) => {
            return prevState + 1
        })
    }
    if (step === 0) {
        return (
        <div>
            <Header></Header>
            
            <Card>
                <div className={classes.iconsDiv}>
                        <i class="fas fa-tv"></i>
                        <i class="fas fa-laptop"></i>
                        <i class="fas fa-mobile-alt"></i>
                        <i class="fas fa-tablet-alt"></i>
                </div>
                <div className={ classes.subText }>
                    <div>
                    Step 1 of 3
                    </div>        
                    <div>
                    <h1>Finish setting  up your account</h1>        
                    </div>
                    <div>
                    Netflix is Personalised for you create a password to watch on any device at any time        
                    </div>
                    <div className={classes.buttonContainer}>
                    <button onClick={stateHandler}>Next</button>
                    </div>
                </div>
            </Card>
            <Footer style={{backgroundColor: '#F3F3F3'}}></Footer>
        </div>
    )        
    }
    else  if(step === 1){
        return (
            <SignUpForm changePage={stateHandler}></SignUpForm>
        )
    } else if (step === 2) {
        return (
            
            <Plans></Plans>
        )
    }

}

export default Signup