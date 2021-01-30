import React, { Component } from 'react';
import { BarreSource } from '../teleporters/Barre';
import { NavLink } from 'react-router-dom'

class SideBar1 extends Component {
    render() {
        return (
            <BarreSource>
                <aside className="main-sidebar sidebar-light-primary elevation-4">
              
              <a href="#/" className="brand-link">
                <img src="img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
                     style={{opacity: .8}} />
                <span className="brand-text font-weight-light">SENEC</span>
              </a>
          
              
              <div className="sidebar">
                
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                  <div className="image">
                    <img src="img/user2-160x160.jpg" className="img-circle elevation-2" alt="User" />
                  </div>
                  <div className="info">
                    <a href="#/" className="d-block">Alexander Pierce</a>
                  </div>
                </div>
          
               
                <nav className="mt-2">
                  <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                  
                    <li className="nav-item has-treeview menu-open">
                      <a href="#/" className="nav-link active">
                        <i className="fas fa-users-cog"></i> &nbsp;
                        <p>
                          Administration
                          <i className="right fas fa-angle-left"></i>
                        </p>
                      </a>
                      <ul className="nav nav-treeview">
                        <li className="nav-item">
                          <a href="/etablissement" className="nav-link active">
                            <i className="fas fa-arrow-alt-circle-right"></i>&nbsp;
                            <p>Créer les établissements</p>
                          </a>
                        </li>
                        <NavLink to="/tiers" className="nav-link active">
                            <i className="fas fa-arrow-alt-circle-right"></i>&nbsp;
                            <p>Créer un tier</p>
                        </NavLink>
                        <li className="nav-item">
                          <a href="#/" className="nav-link ">
                            <i className="fas fa-arrow-alt-circle-right"></i>&nbsp;
                            <p>Gérer les authentifications</p>
                          </a>
                        </li>
                      </ul>
                    </li>
                   
                  </ul>
                </nav>
        
              </div>
             
            </aside>
            </BarreSource>
        );
    }
}

export default SideBar1;