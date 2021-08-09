import React, { Fragment } from 'react'
import Background from '../Background/Background'
import Introcard from '../IntroCard/Introcard'
import Overlay from '../Overlay/Overlay'
import classes from './Intro.module.css'
import tvimg from '../../images/misc/home-tv.jpg'
import mobimg from '../../images/misc/home-mobile.jpg'
import imacimg from '../../images/misc/home-imac.jpg'
import FAQSection from '../FAQSection/FAQSection'
import Footer from '../Footer/Footer'

const Intro = () => {
    return (
        <Fragment>
            <div>
            <div className={classes.introSectionParent}>
                <Background>
                <Overlay>      
                </Overlay>
                </Background>
                <Introcard>
                    <div className={ classes.introCardText }>
                        <h1 className={ classes.introCardTextHeading  }>Enjoy on your TV</h1>
                        <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>    
                    </div>
                        <div className={ classes.imgContainer }>
                        <img src={ tvimg } alt='home-bg' ></img>
                    </div>    
                </Introcard>
                    <Introcard>
                    <div className={ classes.imgContainer }>
                        <img src={mobimg} alt='mob-bg' ></img>
                    </div>   
                    <div className={ classes.introCardText }>
                        <h1 className={ classes.introCardTextHeading  }>Download your programmes to watch on the go</h1>
                        <h3>Save your data and watch all your favourites offline</h3>    
                    </div>
                    </Introcard>
                    <Introcard>
                    <div className={ classes.introCardText }>
                        <h1 className={ classes.introCardTextHeading  }>Watch Everywhere</h1>
                        <h3>Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more </h3>    
                    </div>
                        <div className={ classes.imgContainer }>
                            <img src={imacimg} alt='imac-img'></img>
                    </div>    
                </Introcard>
                    <Introcard style={  {flexDirection: 'column'} }>
                        <div className={classes.fqaSection}>
                        <h1>Frequently Asked Section</h1>
                            <FAQSection heading={'What is Netflix ?'} content={ `Netflix is a streaming ervice that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices.
                    You can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!` }></FAQSection>
                            <FAQSection heading={'What is Netflix ?'} content={ `Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices.
                    You can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!` }></FAQSection>
                    <FAQSection heading={'What is Netflix ?'} content={ `Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices.
                    You can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!` }></FAQSection>
                    <FAQSection heading={'What is Netflix ?'} content={ `Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices.
                    You can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!` }></FAQSection>
                        </div>
                        <div style={{marginTop: '10px'} }>
                        <input placeholder={'Email Address' }></input><button>Try it Now</button>
                        </div>
                </Introcard>
            </div>
            </div>
            <Footer></Footer>
        </Fragment>
    )
}

export default Intro