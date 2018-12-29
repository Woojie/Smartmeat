import React, { useState, Fragment } from 'react'
import {connect} from 'react-redux'

import { logUserIn } from '../store'

import video from '../resources/video/main.mp4'

const LoginForm = ({loginError, logUserIn}) => {
  const [email, getEmail] = useState(""),
  [password, getPassword] = useState("")
  let errorMessage = !loginError ? "" 
  : (<div className="alert alert-danger" role="alert">Login Failed, Email and Password does not match.</div>) 

  return(
    <Fragment>
      <header>
        <div id="showcase-overlay"></div>

        <div id="showcase-info" className="d-flex flex-column align-items-center justify-content-center">
          <form className="login">
            <p className="text-center h4">Log In</p>

            <div className="form-group">
              <input className="form-control" type="email" onChange={(e) => getEmail(e.target.value)} placeholder="Email" />
            </div>

            <div className="form-group">
              <input className="form-control" type="password" onChange={(e) => getPassword(e.target.value)} placeholder="Password" />
            </div>

            <button className="btn btn-secondary mb-2" type="submit" onClick={(e) => logUserIn(e, email, password)} >Login</button>

            <p>Not a user? Sign up <a href="/signup">here</a>.</p>
          </form>
          {errorMessage}
        </div>
      </header>

      <section className="container my-5">
        <div className="row">
          <div className="col-12 text-center">
            <h3>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, ipsa!"</h3>
          </div>

          <div className="col-12 col-md-6 my-5">
            <h3>Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi quaerat asperiores culpa eum, autem amet. Sed rem quae accusamus? Tempore laborum minima eveniet officiis consequuntur deserunt quisquam neque tenetur pariatur?</p>
          </div>

          <div className="col-12 col-md-6 my-5">
            <h3>Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi quaerat asperiores culpa eum, autem amet. Sed rem quae accusamus? Tempore laborum minima eveniet officiis consequuntur deserunt quisquam neque tenetur pariatur?</p>
          </div>
        </div>
      </section>

      <section className="row d-flex align-items-center justify-content-center secondary-section py-5">
        <div className="col-10 col-md-6">
          <h3 className="text-center">Video Showcase</h3>
          <div className="embed-responsive embed-responsive-16by9 rounded shadow-lg my-4">
            <video id="showcase-video" controls>
              <source src={video}/>
            </video>
          </div>
              </div>
              <div className="col-10 col-md-5">
                <h4>Description</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit maiores quidem, dolorem illum laudantium consectetur consequuntur nobis delectus expedita!</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consequatur rem hic ipsa aliquid quod expedita officiis dolorum officia cum quo facere minima, voluptatem necessitatibus unde quas dicta deleniti illo!</p>
              </div>
      </section>

        <section className="container my-5">
          <h3 className="text-center my-5">Our Sponsors</h3>
          <div className="row space-between" id='sponsorsLogos'>
            <div className="col-6 col-md-3">
              <img className="img-fluid" src="https://diylogodesigns.com/wp-content/uploads/2016/04/Mcdonalds-logo-png-Transparent-768x538.png" alt='logo1' />
            </div>
            <div className="col-6 col-md-3">
              <img className="img-fluid" src="https://diylogodesigns.com/wp-content/uploads/2016/04/Mcdonalds-logo-png-Transparent-768x538.png" alt='logo2' />
            </div>
            <div className="col-6 col-md-3">
              <img className="img-fluid" src="https://diylogodesigns.com/wp-content/uploads/2016/04/Mcdonalds-logo-png-Transparent-768x538.png" alt='logo3' />
            </div>
            <div className="col-6 col-md-3">
              <img className="img-fluid" src="https://diylogodesigns.com/wp-content/uploads/2016/04/Mcdonalds-logo-png-Transparent-768x538.png" alt='logo4'/>
            </div>
          </div>
        </section>
    </Fragment>
  )
}
const mapStateToProps = ({login:{loginError}}) => {
  return {
    loginError,
  }
}

const mapFunctoProps = dispatch => {
  return {
  logUserIn: (e, email, password) => logUserIn(e, email, password)
  }
}

export default connect( mapStateToProps, mapFunctoProps, null, {pure:false})(LoginForm)