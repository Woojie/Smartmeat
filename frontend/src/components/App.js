import React, {useEffect} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import LoginForm from './login'
import Signup from './Signup'
import HomePage from './HomePage'
import Header from './Header';
import Footer from './Footer'
import ProfilePage from './ProfilePage'
import CommunityPage from './CommunityPage'
import { searchForUser } from '../store/'




const App = ({loggedIn, user}) => {

    useEffect(()=>{
      if(localStorage.token === undefined){

      }else{
      console.log('hello')
      searchForUser(localStorage.token)
    }
  },[])


    return (

      <div className='App'>
      <Header />

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
        <Route path="/profile" render ={props=>(
          loggedIn ? (<ProfilePage {...props} user={user}/>)
          : (<Redirect to="/login" exact />)
        )} />
        <Route path="/community" render ={props=>(
          loggedIn ? (<CommunityPage {...props} user={user}/>)
          : (<Redirect to="/login" exact />)
        )} />
      </Switch>
      
      <Footer />
      </div>

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
