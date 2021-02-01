import React, { Component } from 'react';
import {getToken,getData,postData} from '../services/Fecthing';
import { connect } from 'react-redux';
import { getTiers, addTiers} from '../stores/actions/execution';
import { Redirect } from 'react-router-dom';
import Menu from '../Menu/Menu1';
import SideBar from '../Menu/Sidebar1';

class Tiers extends Component {
  constructor(props) {
    super(props);
   // this.state = {}
  }

  componentDidMount() {
    
  }

  insertData = async (endpoint,data) => {
    let token = this.props.user.token
     
    //window.alert("=========resp=========="+this.props.isLoggedIn);
      postData(token, endpoint,data).then((resp)=>{
        //window.alert('response: '+JSON.stringify(resp))
      })
      .catch((err)=> window.alert('error Tiers: '+err));
    

    window.alert("Tiers : "+ data);

  }
  
  addTiers = (e) => {
      e.preventDefault();
       let newTiers = {
        id: '',
        tierAdr: e.target.tierAdr.value,
        tierTip: e.target.tierTip.value,
        tierTel: e.target.tierTel.value,
        tierLib: e.target.tierLib.value
      } 
     // window.alert("JSON.stringify(newEtablissement) : "+ JSON.stringify(newEtablissement));
      let endpoint="/api/tier";
      this.insertData(endpoint,JSON.stringify(newTiers));
      
  }



  render() {
   
    return (
     
     
      <div className="content-wrapper">

        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Tiers</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#/">Accueil</a></li>
                  <li className="breadcrumb-item active">Tiers</li>
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
                    <form id="addTiers" onSubmit={this.addTiers.bind(this)}>
                      <div className="row">
                        <div className="col-sm-6">

                          <div className="form-group">
                            <label>Nom du tier</label>
                            <input id="tierLib" type="text" className="form-control" placeholder="Saisir le nom du tier ..." />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Type de tier</label>
                            <input id="tierTip" type="text" className="form-control" placeholder="Saisir le type ..." />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-6">

                          <div className="form-group">
                            <label>Adresse postal</label>
                            <input id="tierAdr" type="text" className="form-control" placeholder="Saisir l'adresse postal ..." />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Téléphone</label>
                            <input id="tierTel" type="text" className="form-control" placeholder="Saisir le téléphone ..." />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-12">
                          <button type="submit" className="btn btn-primary">Enregistrer</button>
                        </div>
                      </div>

                    </form>
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
        addTiers: (tiers) =>{
          dispatch(addTiers(tiers))
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
  
 export default connect(mapStateToProps, mapDispatchToProps)(Tiers);
 