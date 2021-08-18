import { useDispatch, useSelector } from 'react-redux';
import classes from './Plans.module.css'
import Header from '../Header/Header';
import { Fragment } from 'react';
import Footer from '../Footer/Footer';
import { useState } from 'react'
import { useEffect } from 'react';
import MultiRef from 'react-multi-ref';
import firebase from '../../firebase';
import { pageActions } from '../../content-store/content-store';

const Plans = (props) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => {
        return state.user
    })
    const [plan, changePlan] = useState('plan2');
    const [plan1] = useState(() => { return new MultiRef() });
    const [plan2] = useState(() => {return  new MultiRef() });
    const [plan3] = useState(() => { return new MultiRef() });
    const [plan4] = useState(() => { return new MultiRef() });
    const ClickedPlan = (e) => {
        changePlan(e.target.id)
    }
    const planFinal = () => {
        console.log('loading' + user.email);
        firebase.firestore().collection('users').where('email', '==', user.email).get().then((snapshot) => {
            firebase.firestore().collection('users').doc(snapshot.docs[0].id).update({
                plan: plan
            }).then(() => {
                dispatch(pageActions.changePage('browse'))
            })
        })
    }
    console.log(plan1)
    useEffect(() => {
        plan1.map.forEach((node) => {
            node.classList.remove(classes.activatePlanHead)
        })
        plan2.map.forEach((node) => {
            node.classList.remove(classes.activatePlanHead)
        })
        plan3.map.forEach((node) => {
            node.classList.remove(classes.activatePlanHead)
        })
        plan4.map.forEach((node) => {
            node.classList.remove(classes.activatePlanHead)
        })
        if (plan === 'plan1') {
            plan1.map.forEach((node) => {
                node.classList.add(classes.activatePlanHead)
            })
        } else if (plan === 'plan2') {
            plan2.map.forEach((node) => {
                node.classList.add(classes.activatePlanHead)
            })
        } else if (plan === 'plan3') {
            plan3.map.forEach((node) => {
                node.classList.add(classes.activatePlanHead)
            })
        } else {
            plan4.map.forEach((node) => {
                node.classList.add(classes.activatePlanHead)
            })
        }
        console.log(plan)
    }, [plan])
    return (
        <Fragment>
        <Header></Header>
        <div className={classes.headingParent}>    
        <div className={ classes.Heading }>
            <div className={ classes.subHeading }>
                <h3>Step 1 of 3</h3>
                <p>Choose the Plan that's right for you</p>
                <ul style={{listStyleType: 'none'}}>
                    <li>Watch all you want. Ad-free</li>
                    <li>Recommendations just for you</li>
                    <li>Change or cancel your plan anytime</li>
                </ul>
            </div>
            <div className={classes.planTableSection}>
                <div className={classes.planNameHead}>
                <div className={classes.planNameChild}>            
                    <div htmlFor="mobile">
                        <span ref={plan1.ref(1)}>Mobile</span>                
                        <input type='radio' id='plan1' name='plan' onInput={ClickedPlan}></input>
                    </div>
                    <div htmlFor="basic">
                        <span ref={plan2.ref(1)}>Basic</span>
                        <input type='radio' name='plan' id='plan2' onInput={ClickedPlan}></input>
                    </div>
                    <div htmlFor='standard'>
                        <span ref={plan3.ref(1)}>Standard</span>
                        <input id='plan3' type='radio' name='plan' onInput={ClickedPlan}></input>
                    </div>
                    <div htmlFor="premium">
                        <span ref={plan4.ref(1)}>Premium</span>                
                        <input id='plan4' type='radio' name='plan' onInput={ClickedPlan}></input>
                    </div>
                </div>            
                </div>        
                <table className={classes.planTable}>
                    <tr>
                        <td className={classes.detailColumn}>Monthly Price</td>
                        <td ref={plan1.ref(2)}><i class="fas fa-rupee-sign"></i>499</td>
                        <td ref={plan2.ref(2)}><i class="fas fa-rupee-sign"></i>199</td>        
                        <td ref={plan3.ref(2)}><i class="fas fa-rupee-sign"></i>649</td>        
                        <td ref={plan4.ref(2)}><i class="fas fa-rupee-sign"></i>799</td>            
                    </tr>
                    <tr>
                        <td className={classes.detailColumn}>Video Quality</td>        
                        <td ref={plan1.ref(3)}>Good</td>
                        <td ref={plan2.ref(3)}>Good</td>        
                        <td ref={plan3.ref(3)}>Better</td>
                        <td ref={plan4.ref(3)}>Best</td>
                    </tr>    
                    <tr>
                        <td className={classes.detailColumn}>Resolution</td>        
                        <td ref={plan1.ref(4)}>480p</td>        
                        <td ref={plan2.ref(4)}>480p</td>        
                        <td ref={plan3.ref(4)}>1080p</td>
                        <td ref={plan4.ref(4)}>4K+HDR</td>    
                    </tr>
                            <tr className={classes.devicesRow} style={ {border: 'none'}}>
                        <td className={classes.detailColumn} style={{verticalAlign: 'baseline'}}>Devices you can use to watch</td>
                        <td ref={plan1.ref(5)}>
                            <i class="fas fa-mobile-alt">
                                <p>Phone</p>            
                            </i>
                            <i class="fas fa-tablet-alt">
                                <p>Tablet</p>            
                            </i>
                        </td>
                        <td ref={plan2.ref(5)}>
                            <i class="fas fa-mobile-alt">
                                <p>Phone</p>            
                            </i>
                            <i class="fas fa-tablet-alt">
                                <p>Tablet</p>            
                            </i>
                            <i class="fas fa-laptop">
                                <p>Computer</p>            
                            </i>
                            <i class="fas fa-tv">
                                <p>TV</p>            
                            </i>
                        </td>
                        <td ref={plan3.ref(5)}>
                            <i class="fas fa-mobile-alt">
                                <p>Phone</p>            
                            </i>
                            <i class="fas fa-tablet-alt">
                                <p>Tablet</p>            
                            </i>
                            <i class="fas fa-laptop">
                                <p>Computer</p>            
                            </i>
                            <i class="fas fa-tv">
                                <p>TV</p>            
                            </i>
                        </td>
                        <td ref={plan4.ref(5)}>
                            <i class="fas fa-mobile-alt">
                                <p>Phone</p>            
                            </i>
                            <i class="fas fa-tablet-alt">
                                <p>Tablet</p>        
                            </i>
                            <i class="fas fa-laptop">
                                <p>Computer</p>            
                            </i>
                            <i class="fas fa-tv">
                                <p>TV</p>            
                            </i>
                        </td>
                    </tr>    
                </table>
                    </div>
            <div className={classes.buttonContainer}>
            <button onClick={planFinal} className={classes.buttonPlan}>Next</button>
            </div>
        </div>
        </div>
            
            <Footer style={ {backgroundColor: '#f3f3f3'} }></Footer>
        </Fragment>
    )
}


export default Plans