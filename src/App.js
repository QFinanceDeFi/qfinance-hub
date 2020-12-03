import React, { useState } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { Fabric, createTheme, loadTheme } from "@fluentui/react"
import { initializeIcons } from '@uifabric/icons'
import Navbar from "./components/Navbar/Navbar"
import './App.css';
import Home from "./views/Home/Home"
import Learn from "./views/Learn/Learn"
import Pools from "./views/Pools/Pools"
import ManagePool from "./components/ManagePool/ManagePool"

initializeIcons();

const qTheme = createTheme({
  palette: {
    themePrimary: '#cc9966',
    themeLighterAlt: '#fdfaf8',
    themeLighter: '#f7ede3',
    themeLight: '#f0decc',
    themeTertiary: '#e0bf9d',
    themeSecondary: '#d2a476',
    themeDarkAlt: '#b88a5c',
    themeDark: '#9b744e',
    themeDarker: '#725639',
    neutralLighterAlt: '#323130',
    neutralLighter: '#31302f',
    neutralLight: '#2f2e2d',
    neutralQuaternaryAlt: '#2c2b2a',
    neutralQuaternary: '#2a2928',
    neutralTertiaryAlt: '#282726',
    neutralTertiary: '#c8c8c8',
    neutralSecondary: '#d0d0d0',
    neutralPrimaryAlt: '#dadada',
    neutralPrimary: '#ffffff',
    neutralDark: '#f4f4f4',
    black: '#f8f8f8',
    white: '#323130',
  }});

loadTheme(qTheme);

const App = () => {
  const [isConnected, setIsConnected] = useState(() => {
    if (!window.ethereum) {
      return false
    } else {
      return !window.ethereum.selectedAddress ? false : true
    }})

  
  const update = (status) => {
    setIsConnected(status);
  }

  return (
    <Router>
      <Fabric applyThemeToBody>
        <Navbar connected={isConnected} update={update} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/learn">
            <Learn />
          </Route>
          <Route path="/public-pools">
            <Pools pub={true} />
          </Route>
          <Route path="/private-pools">
            <Pools pub={false} />
          </Route>
          <Route path="/pool/:address">
            <ManagePool />
          </Route>
        </Switch>
      </Fabric>
    </Router>
  );
}

export default App;
