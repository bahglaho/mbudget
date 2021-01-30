import React, { Component } from 'react';
import Menu from '../Menu/Menu1'
import SideBar from '../Menu/Sidebar1'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

class Accueil extends Component {

  constructor(props) {
    super(props);
   // this.state = {...this.props.state}
  }

  componentDidMount() {
    
  }

  render() {
    let isLoggedIn = this.props.isLoggedIn;
    //window.alert("=========isLoggedIn accueil=========="+isLoggedIn);
    //window.alert("=========user view=========="+this.props.user);
    if (!isLoggedIn) { return <Redirect to='/' /> }
    return (
      <div>
        <Menu />
        <SideBar />
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Accueil</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#/">Accueil</a></li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps)(Accueil);