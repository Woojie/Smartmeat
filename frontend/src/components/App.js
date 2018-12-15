import React, {useEffect} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import LoginForm from './login'
import Signup from './Signup'
import HomePage from './HomePage'
import { searchForUser } from '../store/'



const App = ({loggedIn, user}) => {

    useEffect(()=>{
      searchForUser(localStorage.token)
  },[])



    return (
      <Switch>
        <Redirect from="/" to="login" exact />
        <Route path="/login" exact render={props=>(
          !loggedIn ? <LoginForm {...props} />
          : <Redirect  to="/home" exact />)} 
        />
        <Route path="/signup" render={props=>(
          !loggedIn ? <Signup {...props} /> 
          : <Redirect to="/home" exact />)} 
        />
        <Route path="/home" render={props=>(
          loggedIn ? (<HomePage {...props} />) 
          : (<Redirect  to="/login" exact />) )} 
        />
      </Switch>
    )

}

const mapStatetoProps = ({login:{loggedIn, user}}) => {
  return {
    loggedIn,
    user,

  }
}

const mapFuncToProps = dispatch => {
  return {
    searchForUser: (token) => dispatch(searchForUser(token))
  }
}

export default connect(mapStatetoProps, mapFuncToProps,  null, {pure:false})(App);
