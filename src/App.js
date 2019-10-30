import React, { useState } from 'react';
import './App.css';
import SideBar from './components/sideBar/SideBar'
import Nav from './components/nav/Nav'
import { Route, Switch } from 'react-router-dom'
import Experience from './components/experience/Experience'
import Formation from './components/formation/Formation';

import { __RouterContext } from 'react-router-dom'

import { animated } from 'react-spring'

function App() {

  let mobile_width = 768;
  let [isDesktop, setisDesktop] = useState(window.innerWidth > mobile_width);
  window.addEventListener('resize', () => {
    setisDesktop(window.innerWidth > mobile_width);
  })
  const handel_nav = () => {
    const distanceY = document.getElementsByClassName("App")[0].scrollTop,
      shrinkOn = 100,
      headerEl = document.getElementsByClassName("mobileNav")[0];

    console.log(distanceY);


    if (isDesktop == false) {


      if (distanceY > shrinkOn) {
        headerEl.classList.add("mini_nav");
      } else {
        headerEl.classList.remove("mini_nav");
      }
    }
  }

  if (isDesktop) {
    const main_content =
      <animated.div >
        <Switch >
          <Route exact path="/" component={Experience} />
          <Route path="/Formations" component={Formation} />
          <Route component={Experience} />
        </Switch>
      </animated.div>

    return (

      <div className="App" >
        <Nav>

        </Nav>
        <SideBar isDesktop={isDesktop}>

        </SideBar>
        <div className="contentContainer">
          {main_content}
        </div>
      </div>

    );
  } else {
    return (
      <div className="App" onScroll={handel_nav}>
        <SideBar isDesktop={isDesktop} >
        </SideBar>
        <Experience isDesktop={isDesktop}>
        </Experience>
        <Formation isDesktop={isDesktop} >

        </Formation>
        <div className="snap-scroll"></div>

      </div>
    )
  }
}

export default App;
