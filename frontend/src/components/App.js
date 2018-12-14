import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import LoginForm from './login'
import Signup from './Signup'
import HomePage from './HomePage'



const App = ({loggedIn, token}) => {

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

const mapStatetoProps = ({login:{loggedIn, token}}) => {
  return {
    loggedIn: loggedIn,
    token: token
  }
}

export default connect(mapStatetoProps, null, null, {pure:false})(App);
