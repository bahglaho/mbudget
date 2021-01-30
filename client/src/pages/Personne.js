import React, { Component } from 'react';
import {getToken,getData} from '../services/Fecthing';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Menu from '../Menu/Menu1'

export default class Personne extends Component {

  insertData = async (endpoint,data) => {

    getToken().then((resp)=>{
      let token=resp.data.access_token;
      getData(token,"/personne").then((resp)=>{
        window.alert('response: '+JSON.stringify(resp))
      })
      .catch((err)=> window.alert('error: '+err));
    })
    .catch((err)=> window.alert('error: '+err));

    window.alert("Personne : "+ data);
    
   
    /* axios.post(endpoint, data,axiosConfig)
        .then((response) => window.alert('response: '+JSON.stringify(response)))
        .catch((err)=> window.alert('error: '+err)); */

  }
  
  addPersonne = (e) => {
      e.preventDefault();
       let newPersonne = {
          persNom: e.target.nom.value,
          persPrenom: e.target.prenom.value,
          persEmail: e.target.email.value,
          persTel: e.target.tel.value,
          persAdresse: e.target.adresse.value,  
      } 
      
      window.alert("Personne : "+ JSON.stringify(null));
      let endpoint="http://localhost:8080/personne";
      this.insertData(endpoint,JSON.stringify(newPersonne));
      
  }



  render() {
    return (
      <div>
     <Menu />
      <div className="content-wrapper">

        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Personne</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#/">Accueil</a></li>
                  <li className="breadcrumb-item active">Personne</li>
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
                    <h3 className="card-title">Personne</h3>
                  </div>

                  <div className="card-body">
                    <form id="addPersonne" onSubmit={this.addPersonne.bind(this)}>
                      <div className="row">
                        <div className="col-sm-6">

                          <div className="form-group">
                            <label>Nom</label>
                            <input id="nom" type="text" className="form-control" placeholder="Saisir le nom ..." />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Prénom</label>
                            <input id="prenom" type="text" className="form-control" placeholder="Saisir le prénom ..." />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Email</label>
                            <input id="email" type="text" className="form-control" placeholder="Saisir le email ..." />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Téléphone</label>
                            <input id="tel" type="text" className="form-control" placeholder="Saisir le téléphone ..." />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-12">

                          <div className="form-group">
                            <label>Adresse</label>
                            <input id="adresse" type="text" className="form-control" placeholder="Saisir l'adresse ..." />
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
</div>
    )
  }
}