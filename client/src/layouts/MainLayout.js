import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Menu from './../Menu/Menu1'
import SideBar from './../Menu/Sidebar1'


const MainLayout = props => {
    let isLoggedIn =  false;
    if (typeof(props.isLoggedIn) !== 'undefined') {
        isLoggedIn = props.isLoggedIn
 } 

    if (!isLoggedIn) { return <Redirect to='/' /> }
    return (
        <div>
            <Menu />
            <SideBar />
           
            {props.children}
            
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
      isLoggedIn: state.auth.isLoggedIn
    }
  }
  
  export default connect(mapStateToProps)(MainLayout)