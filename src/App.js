import React, { useState } from 'react';
import './App.css';
import SideBar from './components/sideBar/SideBar'
import Nav from './components/nav/Nav'
import { Route, Switch } from 'react-router-dom'
import Experience from './components/experience/Experience'
import Formation from './components/formation/Formation';

import { useContext } from 'react'
import { __RouterContext } from 'react-router-dom'

import { useTransition, animated } from 'react-spring'

function App() {

  const { location } = useContext(__RouterContext)
  let mobile_width = 500;
  let [isDesktop, setisDesktop] = useState(window.innerWidth > mobile_width)

  let [width, setWidth] = useState(window.innerWidth)
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
  // window.addEventListener("scroll", handel_nav)
  const transitions = useTransition(location, location => location.pathname, {
    initial: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })

  if (isDesktop) {
    const main_content = transitions.map(({ item, props, key }) => (


      <animated.div key={key} style={props}>
        <Switch location={item}>
          <Route exact path="/" component={Experience} />
          <Route path="/Formations" component={Formation} />
          <Route component={Experience} />
        </Switch>
      </animated.div>

    ))


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
