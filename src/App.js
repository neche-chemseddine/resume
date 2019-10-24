import React from 'react';
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

  const transitions = useTransition(location, location => location.pathname, {
    initial: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })

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

    <div className="App">
      <Nav>

      </Nav>
      <SideBar>

      </SideBar>
      <div className="contentContainer">
        {main_content}
      </div>
    </div>

  );
}

export default App;
