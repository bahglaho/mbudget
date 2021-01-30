import React, { Component } from 'react';
import {getToken,getData,postData} from '../services/Fecthing';
import Menu from '../Menu/Menu1'
import SideBar from '../Menu/Sidebar1'

export default class Etablissement extends Component {

  insertData = async (endpoint,data) => {

    await getToken().then((resp)=>{
      let token=resp.data.access_token;
      //window.alert("================token=============== : "+ token);
      postData(token,endpoint,data).then((resp)=>{
        //window.alert('response: '+JSON.stringify(resp))
      })
      .catch((err)=> window.alert('error: '+err));
    })
    .catch((err)=> window.alert('error: '+err));

    window.alert("Etablissement : "+ data);

  }
  
  addEtablissement = (e) => {
      e.preventDefault();
       let newEtablissement = {
        libelle: e.target.libelle.value,
        code: e.target.code.value,
        iep: e.target.iep.value,
        codeIep: e.target.codeIEP.value,
        dren: e.target.dren.value,  
        autonomie: e.target.autonomie.value,
        numeroDecisionCreation: e.target.numDecisionCrea.value, 
        dateDecisionCreation: e.target.dateDecisionCrea.value,
        numeroDecisionOuverture: e.target.numDecisionOuv.value, 
        dateDecisionOuverture: e.target.dateDecisionOuv.value,
        adressePostal: e.target.adressePostal.value, 
        telephone: e.target.tel.value, 
        email: e.target.email.value, 
        cell: e.target.cel.value 
      } 
     // window.alert("JSON.stringify(newEtablissement) : "+ JSON.stringify(newEtablissement));
      let endpoint="/api/etablissement";
      this.insertData(endpoint,JSON.stringify(newEtablissement));
      
  }



  render() {
    return (
      <div>
     <Menu />
     <SideBar/>
      <div className="content-wrapper">

        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Etablissement</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#/">Accueil</a></li>
                  <li className="breadcrumb-item active">Etablissement</li>
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
                    <h3 className="card-title">Etablissement</h3>
                  </div>

                  <div className="card-body">
                    <form id="addPersonne" onSubmit={this.addEtablissement.bind(this)}>
                      <div className="row">
                        <div className="col-sm-6">

                          <div className="form-group">
                            <label>Libellé</label>
                            <input id="libelle" type="text" className="form-control" placeholder="Saisir le libellé ..." />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Code de l'établissement</label>
                            <input id="code" type="text" className="form-control" placeholder="Saisir le code ..." />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-6">

                          <div className="form-group">
                            <label>IEP</label>
                            <input id="iep" type="text" className="form-control" placeholder="Saisir l'IEP ..." />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Code de l'IEP</label>
                            <input id="codeIEP" type="text" className="form-control" placeholder="Saisir le code de l'IEP ..." />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-6">

                          <div className="form-group">
                            <label>DREN</label>
                            <input id="dren" type="text" className="form-control" placeholder="Saisir le DREN ..." />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <div><label>Autonomie</label></div>
                            <div class="form-check-inline">
                              <label class="form-check-label">
                              <input type="radio" class="form-check-input" name="autonomie" checked />Autonome
                              </label>
                            </div>
                            <div class="form-check-inline">
                              <label class="form-check-label">
                              <input type="radio" class="form-check-input" name="autonomie" />Non autonome
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-6">

                          <div className="form-group">
                            <label>N° décision d'autorisation de création</label>
                            <input id="numDecisionCrea" type="text" className="form-control" placeholder="Saisir le numéro de la décision de création ..." />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          

                          <div class="form-group">
                            <label>Date d'autorisation de création</label>
                            <input id="dateDecisionCrea" type="date" class="form-control datetimepicker-input"  />
                          </div>


                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-6">

                          <div className="form-group">
                            <label>N° décision d'autorisation d'ouverture</label>
                            <input id="numDecisionOuv" type="text" className="form-control" placeholder="Saisir le numéro de la décision d'ouverture ..." />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Date d'autorisation d'ouverture</label>
                            <input id="dateDecisionOuv" type="date" class="form-control datetimepicker-input"  />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-6">

                          <div className="form-group">
                            <label>Adresse postal</label>
                            <input id="adressePostal" type="text" className="form-control" placeholder="Saisir l'adresse postal ..." />
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
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Email</label>
                            <input id="email" type="text" className="form-control" placeholder="Saisir le email ..." />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Cellulaire</label>
                            <input id="cel" type="text" className="form-control" placeholder="Saisir le cellulaire ..." />
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