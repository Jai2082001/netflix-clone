import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Background from '../Background/Background';
import SigninContent from '../signinContent/SigninContent';
import Footer from '../Footer/Footer';

const Signin = () => {
    return (
    <Background>
        <Fragment>        
            <Header></Header>
                <SigninContent></SigninContent>
                <Footer></Footer>
        </Fragment>
        </Background>
    )
}

export default Signin