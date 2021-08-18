import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import classes from './SignUpForm.module.css'
import { Fragment } from 'react-is'
import Card from '../Card/Card'
import {useSelector} from 'react-redux'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { pageActions, userActions } from '../../content-store/content-store'
import firebase from '../../firebase'

const SignUpForm = (props) => {
    const password = useRef()
    const dispatch = useDispatch();
    const user = useSelector((state) => {
        return state.user
    })
    const forwardHandler =  async (event) => {
        event.preventDefault();
        // console.log(event)
        let fetcheddocs = []
        if (password.current.value && user.email) {
            await firebase.firestore().collection('users').where('email', '==', `${user.email}`).get().then((snapshot) => {
                fetcheddocs = snapshot.docs
            })
            if (!fetcheddocs.length) {
                await firebase.firestore().collection('users').add({
                email: user.email,
                    password: password.current.value
                })
                dispatch(userActions.changeWholeUser({email: user.email, password: password.current.value, isAuth: true}))        
                props.changePage()
            } else {
                console.log('Already found')
                dispatch(pageActions.changePage('signin'))
            }
        }
    }
    return(
        <Fragment>
        <Header></Header>
        <Card>
            <div className={ classes.signUpForm }>
                <div className={classes.text}>
                    <div>Step 1 of 3</div>    
                    <div>
                        <h1>Create a password to start your membership</h1>
                    </div>
                    <div>Just a few more steps and you're done!</div>
                    <div>We Hate paperwork, too</div>
                </div>
                <form onSubmit={forwardHandler}>
                    <input placeholder='Email Address' value={user.email} onChange={(e)=>{ dispatch(userActions.changeUser(e.target.value))}}></input>
                    <input type='password' ref={password} placeholder="Password"></input>
                    <button>Next</button>    
                </form>        
            </div>                
        </Card>
        <Footer style={{backgroundColor: '#f3f3f3'}}></Footer>
        </Fragment>
    )
}

export default SignUpForm