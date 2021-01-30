import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuSource } from '../teleporters/Menu'
import { connect } from 'react-redux'
import {loggedOut} from '../stores/actions'

class Menu1 extends Component {
  
    render() {
        return (
            <MenuSource>
                <nav className="main-header navbar navbar-expand navbar-lightblue navbar-dark">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" data-widget="pushmenu" href="#/" role="button"><i className="fas fa-bars"></i></a>
                        </li>

                        <li className="nav-item dropdown">
                            <a id="dropdownMenu1" href="#/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle"><i className="fas fa-cogs"></i> Administration</a>
                            <ul aria-labelledby="dropdownMenu1" className="dropdown-menu border-0 shadow">
                                <li><a href="#/" className="dropdown-item"><i className="fas fa-arrow-alt-circle-right"></i> Opérateur</a></li>
                                <li><a href="#/" className="dropdown-item"><i className="fas fa-arrow-alt-circle-right"></i> Fonction</a></li>
                                <li><a href="#/" className="dropdown-item"><i className="fas fa-arrow-alt-circle-right"></i> Habilitations</a></li>
                            </ul>
                        </li>

                       

                        <li className="nav-item dropdown">
                            <a id="dropdownMenu2" href="#/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle"><i className="fas fa-folder"></i> Elaboration budgétaire</a>
                            <ul aria-labelledby="dropdownMenu2" className="dropdown-menu border-0 shadow">

                                <li className="dropdown-submenu dropdown-hover">
                                    <a id="dropdownSubMenu3" href="#/" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-item dropdown-toggle">
                                        <i className="fas fa-arrow-alt-circle-right"></i> Réédition des actes
                                    </a>
                                    <ul aria-labelledby="dropdownSubMenu3" className="dropdown-menu border-0 shadow">
                                        <li><a href="#/" className="dropdown-item"><i className="fas fa-arrow-alt-circle-right"></i> Enregistrer la décision de l'ETAT</a></li>
                                        <li><a href="#/" className="dropdown-item"><i className="fas fa-arrow-alt-circle-right"></i> Enregistrer le mandat émis par l'ETAT</a></li>
                                    </ul>
                                </li>

                                <li><a href="#/" className="dropdown-item"><i className="fas fa-arrow-alt-circle-right"></i> Retraiter les subventions des établissements </a></li>
                                <li className="dropdown-submenu dropdown-hover">
                                    <a id="dropdownSubMenu4" href="#/" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-item dropdown-toggle">
                                        <i className="fas fa-arrow-alt-circle-right"></i> Suivre le paiement de la subvention
                                    </a>
                                    <ul aria-labelledby="dropdownSubMenu4" className="dropdown-menu border-0 shadow">
                                        <li><a href="#/" className="dropdown-item"><i className="fas fa-arrow-alt-circle-right"></i> Enregistrer l’avis de débit</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a id="dropdownMenu3" href="#/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle"><i className="fas fa-cog"></i> Exécution des dépenses </a>

                            <ul aria-labelledby="dropdownMenu3" className="dropdown-menu border-0 shadow">
                                <li><NavLink to="/execution/demande" exact={true} className="dropdown-item"><i className="fas fa-arrow-alt-circle-right"></i> Procédure Simplifiée  </NavLink></li>
                                <li><NavLink to="/" exact={true} className="dropdown-item"><i className="fas fa-arrow-alt-circle-right"></i> Procédure Normale </NavLink></li>
                            </ul>

                        </li>
            

                    </ul>


                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item dropdown">
                            <a className="nav-link" data-toggle="dropdown" href="#/">
                                <i className="far fa-comments"></i>
                                <span className="badge badge-danger navbar-badge">3</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <a href="#/" className="dropdown-item">

                                    <div className="media">
                                        <img src="img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                                        <div className="media-body">
                                            <h3 className="dropdown-item-title">
                                                Brad Diesel
                                            <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
                                            </h3>
                                            <p className="text-sm">Call me whenever you can...</p>
                                            <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                        </div>
                                    </div>

                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#/" className="dropdown-item">

                                    <div className="media">
                                        <img src="img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                        <div className="media-body">
                                            <h3 className="dropdown-item-title">
                                                John Pierce
                                            <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
                                            </h3>
                                            <p className="text-sm">I got your message bro</p>
                                            <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                        </div>
                                    </div>

                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#/" className="dropdown-item">

                                    <div className="media">
                                        <img src="img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                        <div className="media-body">
                                            <h3 className="dropdown-item-title">
                                                Nora Silvester
                                            <span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
                                            </h3>
                                            <p className="text-sm">The subject goes here</p>
                                            <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                        </div>
                                    </div>

                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#/" className="dropdown-item dropdown-footer">See All Messages</a>
                            </div>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" data-widget="control-sidebar" data-slide="true" role="button"><i
                                className="fas fa-sign-out-large"></i> Déconnexion</NavLink>
                        </li> 
                    </ul>
                </nav>
            </MenuSource>
        );
    }
}

export default Menu1;