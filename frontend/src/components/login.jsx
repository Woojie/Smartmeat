import React, { useState, Fragment } from 'react'
import {connect} from 'react-redux'

import { logUserIn } from '../store'

const LoginForm = ({loginError, logUserIn}) => {
  const [email, getEmail] = useState(""),
  [password, getPassword] = useState("")
  let errorMessage = !loginError ? "" 
  : (<div className="alert alert-danger" role="alert">Login Failed, Email and Password does not match.</div>) 

  return(
    <Fragment>
      <header>
        <div id="showcase-overlay"></div>

        <div id="showcase-info" className="container d-flex flex-column align-items-center justify-content-center">
          <h1 className='login'>Log in</h1>
          <form className='login'>
            <input type="email" onChange={(e) => getEmail(e.target.value)} placeholder="enter email" />
            <input type="password" onChange={(e) => getPassword(e.target.value)} placeholder="Enter password" />
            <button type="submit" onClick={(e) => logUserIn(e, email, password)} >Login</button>
            {errorMessage}
          </form>
          <h4>Not a user? Sign up <a href="/signup">here</a>.</h4>
        </div>
      </header>

      <section class="container my-5">
        <div class="row">
          <div class="col-12 col-md-6 my-5">
            <h3>Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi quaerat asperiores culpa eum, autem amet. Sed rem quae accusamus? Tempore laborum minima eveniet officiis consequuntur deserunt quisquam neque tenetur pariatur?</p>
          </div>

          <div class="col-12 col-md-6 my-5">
            <h3>Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi quaerat asperiores culpa eum, autem amet. Sed rem quae accusamus? Tempore laborum minima eveniet officiis consequuntur deserunt quisquam neque tenetur pariatur?</p>
          </div>
        </div>
      </section>

      <section class="row d-flex align-items-center justify-content-center secondary-section py-5">
        <div class="col-10 col-md-6">
          <h3 class="text-center">Video Showcase</h3>
          <div class="embed-responsive embed-responsive-16by9 rounded shadow-lg my-4">
            <video id="showcase-video" src="./resources/video/main.mp4" controls></video>
          </div>
              </div>
              <div class="col-10 col-md-5">
                <h4>Description</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit maiores quidem, dolorem illum laudantium consectetur consequuntur nobis delectus expedita!</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consequatur rem hic ipsa aliquid quod expedita officiis dolorum officia cum quo facere minima, voluptatem necessitatibus unde quas dicta deleniti illo!</p>
              </div>
      </section>

        <section class="container my-5">
          <h3 class="text-center my-5">Our Sponsors</h3>
          <div class="row space-between">
            <div class="col-6 col-md-3">
              <img class="img-fluid" src="https://diylogodesigns.com/wp-content/uploads/2016/04/Mcdonalds-logo-png-Transparent-768x538.png" />
            </div>
            <div class="col-6 col-md-3">
              <img class="img-fluid" src="https://diylogodesigns.com/wp-content/uploads/2016/04/Mcdonalds-logo-png-Transparent-768x538.png" />
            </div>
            <div class="col-6 col-md-3">
              <img class="img-fluid" src="https://diylogodesigns.com/wp-content/uploads/2016/04/Mcdonalds-logo-png-Transparent-768x538.png" />
            </div>
            <div class="col-6 col-md-3">
              <img class="img-fluid" src="https://diylogodesigns.com/wp-content/uploads/2016/04/Mcdonalds-logo-png-Transparent-768x538.png" />
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