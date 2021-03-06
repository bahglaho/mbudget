import React, { Component } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Personne from './pages/Personne';
//import AppNav from './AppNav';
//import {Row} from 'reactstrap'

//import grailsLogo from './images/grails-cupsonly-logo-white.svg';
//import reactLogo from './images/logo.svg';
import {CLIENT_VERSION, REACT_VERSION, SERVER_URL} from './config';
//import 'whatwg-fetch';
//import Footer from "./Footer";

//import Menu from './Menu'

import {BrowserRouter,Switch,Route } from 'react-router-dom';
import MainLayoutRoutes from './layouts/MainLayoutRoutes';
import Login from './pages/Login';
import Accueil from './pages/Accueil';
import Tiers from './pages/Tiers';
import Demande from './pages/module/execution/Demande';
import EditDemande from './pages/module/execution/EditDemande';

class App extends Component {

  constructor() {
    super();
    this.state = {
      serverInfo: {},
      clientInfo: {
        version: CLIENT_VERSION,
        react: REACT_VERSION
      },
      collapse: false
    }
  }


  toggle = () => {
    this.setState({collapse: !!this.state.collapse})
  };

  componentDidMount() {
    /* fetch(SERVER_URL + '/application')
      .then(r => r.json())
      .then(json => this.setState({serverInfo: json}))
      .catch(error => console.error('Error connecting to server: ' + error)); */

  }

  render() {
    //const {serverInfo, clientInfo, collapse} = this.state;

    return (
      <div>
      <Header />
      <SideBar />

      <BrowserRouter>
          <Switch>
              <Route exact path="/"  component={Login} />
              <MainLayoutRoutes exact path="/accueil"  component={Accueil} />
              <MainLayoutRoutes  path="/tiers"  component={Tiers} />
              <MainLayoutRoutes path="/execution/demande"  component={Demande} />
              <MainLayoutRoutes  path="/execution/newDemande"  component={EditDemande} />
          </Switch>                   
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
