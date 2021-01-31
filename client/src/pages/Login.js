import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {getToken,getData,postData} from '../services/Fecthing';
import { connect } from 'react-redux'
import * as actions from '../stores/actions/auth'


class Login extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          error: false,
          errStatus: null,
          errorMessage:null
        }
      }

    connect=(e)=>{
        e.preventDefault();
        let user = {
            username: e.target.login.value,
            password: e.target.password.value,
            roles:null,
            token: null
              
        } 

        getToken(JSON.stringify(user)).then((resp)=>{
           // let token=resp.data.access_token;
            user.token = resp.data.access_token;
            user.password = ''
           // window.alert("=========resp=========="+user.token);
           // window.alert("=========user=========="+user.username);
            //this.props.handleLogin()
            
            //this.props.addUser(user)
            this.props.loggedIn(user)

            
        })
        .catch((err)=> {
            //window.alert('error: '+err);
            console.log(err.message);
            //console.log(JSON.parse(err.config.data).username);
            //console.log(JSON.parse(err.response).statut);
            let status  = err.message === 'Network Error'? 200 : 400;
            //console.log({err});
            this.setState({error: true});
            this.setState({errStatus: status});
        });


    }

    manageMessage=()=>{
        if(this.state.error){
            let status = this.state.errStatus
           
            return(
                <div className= {(status === 401 || status === 400) ?'alert alert-warning' : 'alert alert-danger'} role="alert">
                   {status === 401 ?'Paramètres de connexion incorrects' : (status === 400 ? 'Saisir un login et un mot de passe svp!' : 'Le serveur est indisponible')}
                </div>
            )
        }
    }

    render() {

        let isLoggedIn = this.props.isLoggedIn;
        if(isLoggedIn){return <Redirect to='/accueil' />}
        return (
            <div className="hold-transition login-page">
                <div className="login-box">
            
                    <div className="card card-outline card-primary">
                        <div className="card-header text-center">
                            <h1><b>AGBO</b>-MBUDGET</h1>
                        </div>
                        <div className="card-body">
                            <p className="login-box-msg">Connectez-vous pour commencer votre session</p>

                                {this.manageMessage()}
                            <form id="formlogin" onSubmit={this.connect.bind(this)}>
                                <div className="input-group mb-3">
                                    <input type="text" id="login" name="login" className="form-control" placeholder="Nom utilisateur" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" id="password" name="password" className="form-control" placeholder="Mot de passe" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="icheck-primary">
                                            <input type="checkbox" id="remember" />&nbsp;
                                            <label htmlFor="remember">
                                                Se rappeler
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <button type="submit" className="btn btn-primary btn-block"> Se connecter</button>
                                    </div>

                                </div>
                            </form>

                            <p className="mb-1">
                                <a href="forgot-password.html">Mot de passe oublié !</a>
                            </p>
                           
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}
//Lier l'etat global aux props du Component
const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        isLoggedIn: state.auth.isLoggedIn
    }
  }

  
  
  export default connect(mapStateToProps, actions)(Login);