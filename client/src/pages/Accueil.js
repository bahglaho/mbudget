import React, { Component } from 'react';
import { connect } from 'react-redux'

class Accueil extends Component {

  constructor(props) {
    super(props);
   // this.state = {...this.props.state}
  }

 

  render() {

    return (
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
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(Accueil);