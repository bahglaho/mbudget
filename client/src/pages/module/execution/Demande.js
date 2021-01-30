import React, { Component } from 'react';
import {getToken,getData,postData} from '../../../services/Fecthing';
import { connect } from 'react-redux';
import { getDemande, delDemande} from '../../../stores/actions';
import { NavLink, Link, Redirect } from 'react-router-dom';
import Menu from '../../../Menu/Menu1';
import SideBar from '../../../Menu/Sidebar1';
import DemandeList from '../../../components/execution/DemandeList';

class Demande extends Component {
  constructor(props) {
    super(props);
   // this.state = {}
  }

  state = {
    dems: []
    
}

componentDidMount = () => {
    let endpoint="/api/tier";
    let initialData = this.getDemande()
      this.setState({
        dems : initialData
      })
    }
  
    
 
    getDemande = async () => {
    let token = this.props.user.token
    let endpoint="/api/tier";
      getData(token, endpoint).then((resp)=>{
          let data = JSON.stringify(resp.data)
        window.alert('response: '+JSON.stringify(resp))
          return data
        
      })
      .catch((err)=> window.alert('error Demande: '+err));


  }
  



  render() {
    let isLoggedIn = this.props.isLoggedIn;

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
                <h1 className="m-0 text-dark">Demande</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><NavLink to="/">Accueil</NavLink></li>
                  <li className="breadcrumb-item active">Demande</li>
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
                    <h3 className="card-title">Tier</h3>
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
                                    <Link to="/posts/new" className="btn btn-primary">New Post</Link>
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
  
 export default connect(mapStateToProps, mapDispatchToProps)(Demande,);
 