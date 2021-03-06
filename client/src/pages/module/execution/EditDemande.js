import React, { Component } from 'react';
import {getToken,getData,postData} from '../../../services/Fecthing';
import { connect } from 'react-redux';
import { getDemande, delDemande} from '../../../stores/actions/execution';
import { NavLink, Link, Redirect } from 'react-router-dom';
import Menu from '../../../Menu/Menu1';
import SideBar from '../../../Menu/Sidebar1';

class EditDemande extends Component {
  constructor(props) {
    super(props);
   // this.state = {}
  }

  state = {
    dems: []
    
}

componentDidMount = () => {
    let endpoint="/api/tier";
    this.getDemande()
     
        // window.alert('data: '+JSON.stringify(initialData))
    }
  
    
 
    getDemande = async () => {
    let token = this.props.user.token
    let endpoint="/api/tier";
      getData(token, endpoint).then((resp)=>{
          //let data = JSON.stringify(resp.data)
        //window.alert('response: '+resp.data)
        this.setState({
          dems : resp.data
        })
        
      })
      .catch((err)=> window.alert('error Demande: '+err));


  }
  
  delDemande = async () => {
    let token = this.props.user.token
    let endpoint="/api/tier";
      getData(token, endpoint).then((resp)=>{
          let data = [] 
          data = JSON.stringify(resp.data)
        window.alert('response: '+JSON.stringify(resp))
          return data
        
      })
      .catch((err)=> window.alert('error Demande: '+err));


  }
  



  render() {
   
    return (
      <div className="content-wrapper">
 
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Nouvelle demande</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><NavLink to="/">Accueil</NavLink></li>
                    <li className="breadcrumb-item active">Demandes / Nouvelle demande</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

        <div className="content">
          <div className="container-fluid">
            <div className="row">

              <div className="col-md-12">

                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Ecran de saisie d'une demande d'engagement </h3>
                  </div>

                  <div className="card-body">
                    <div>
                        <div className="row">
                                <div className="col-md-6">
                                    {/* <SearchInput
                                        value={params.q}
                                        onSearch={this.handleSearch}
                                        placeholder="Title search ..."
                                    /> */}
                                </div>
                                <div className="col-md-6 text-right">
                                    <Link to="/execution/newDemande" className="btn btn-primary"><i class="far fa-plus-square"></i> Suivant</Link>
                                </div>
                          </div>
                        </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    )
  }
}
//joindre les reducers au composant
const mapDispatchToProps = (dispatch) => {
    return {
        delDemande: (demande) =>{
          dispatch(delDemande(demande))
      },  
      getDemande: () =>{
        dispatch(getDemande())
    },  
    }
  }
  
//Lier l'etat global aux props du Component
const mapStateToProps = (state) => {
  return {
      user: state.user,
      isLoggedIn: state.isLoggedIn
  }
}
  
 export default connect(mapStateToProps, mapDispatchToProps)(EditDemande);
 