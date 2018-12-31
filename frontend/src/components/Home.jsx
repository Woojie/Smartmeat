import React from 'react';

import video from '../resources/video/main.mp4'
import communityIcon from '../resources/icon/community.svg'
import awarenessIcon from '../resources/icon/awareness.svg'
import calculateIcon from '../resources/icon/calculate.svg'

import munifa from '../resources/profile/munifa_ahmad.jpg'
import wooj from '../resources/profile/wooj_chung.jpg'
import roman from '../resources/profile/roman_iudin.jpg'
import kary from '../resources/profile/kary_ma.jpg'

const Home = () => {
  return (
    <div>
      <header className="showcase">
        <div className="showcase-container d-flex flex-column justify-content-center align-items-center">
          <h3 className="showcase-title bg-light">Less Meat, Less Heat, More Life...</h3>
          <video className="showcase-video rounded" src={video} controls></video>
        </div>
      </header>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 mb-5 mb-md-0">
              <h3 className="text-center">Vision</h3>
              <blockquote><p className="quotation">Green communities with green thinkers that aims for less meat, less heat and more life!</p></blockquote>
            </div>

            <div className="col-12 col-md-6">
              <h3 className="text-center">Mission</h3>
              <blockquote><p className="quotation">To raise eConsciousness and empower our generation on how we can positively contribute to the environment for daily life choices.</p></blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="light py-5">
        <div className="mx-5">
          <div className="row">
            <div className="col-12 col-md-4">
              <img className="d-block mx-auto" src={awarenessIcon} alt="awareness icon" height="100px " />
              <h3 className="text-center">Raise Awareness</h3>
              <p>Raising awareness of climate change by showing the impact of food production and livestock.</p>
            </div>

            <div className="col-12 col-md-4 my-5 my-md-0">
              <img className="d-block mx-auto" src={calculateIcon} alt="calculate icon" height="100px " />
              <h3 className="text-center">Calculate and Track</h3>
              <p>With a couple of generic questions, the carbon calculator will estimate in annual average projectionof potential emission.</p>
            </div>

            <div className="col-12 col-md-4">
              <img className="d-block mx-auto" src={communityIcon} alt="community icon" height="100px "/>
              <h3 className="text-center">Join our community</h3>
              <p>Coming together to reduce our CO2 emmisions by building a community of green thinkers.</p>
            </div>
          </div>
        </div>
      </section>

      <header class="showcase" style={{height: '20vh'}}></header>

      <section className="py-5">
        <div className="mx-5">
          <div className="row">
            <h3 className="text-center col-12 mb-5">Our Team</h3>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <img className="d-block mx-auto img-fluid" src={munifa} alt="awareness icon" height="200px " />
              <h4 className="text-center">Munifa Ahmad</h4>
              <h5 className="text-center">Product Owner</h5>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <img className="d-block mx-auto img-fluid" src={wooj} alt="calculate icon" height="200px " />
              <h4 className="text-center">Woo Jae Chung</h4>
              <h5 className="text-center">Full-Stack Web Developer</h5>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <img className="d-block mx-auto img-fluid" src={roman} alt="community icon" height="200px "/>
              <h4 className="text-center">Roman Iudin</h4>
              <h5 className="text-center">Web Developer</h5>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <img className="d-block mx-auto img-fluid" src={kary} alt="community icon" height="200px "/>
              <h4 className="text-center">Kary Ma</h4>
              <h5 className="text-center">Front-End Web Developer</h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;