import { Fragment, useEffect } from 'react';
import Intro from './components/Intro/Intro';
import './App.css';
import {useSelector} from 'react-redux'
import Signin from './components/signin/signin';
import Signup from './components/signup/signup';

import Browse from './components/Browse/Browse'

function App() {
  const pageState = useSelector((state)=>{return state.page.page})
  console.log(pageState)
  switch(pageState){
    case 'home':
      return (
        <Fragment>
          <Intro></Intro>
        </Fragment>
      );

    case 'signin':
      return (
        <Fragment>
          <Signin></Signin>
        </Fragment>
      )
    case 'signup':
      return (
        <Fragment>
          <Signup></Signup>
        </Fragment>
      )
    case 'browse':
      return (
        <Fragment>
          <Browse></Browse>
        </Fragment>
      )
    default:
      return (
        <Fragment>
          <Intro></Intro>
        </Fragment>
      )
  }

}

export default App;
