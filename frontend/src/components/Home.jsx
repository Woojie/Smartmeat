import React from 'react';

import video from '../resources/video/main.mp4'
import communityIcon from '../resources/icon/community.svg'
import awarenessIcon from '../resources/icon/awareness.svg'
import calculateIcon from '../resources/icon/calculate.svg'

const Home = () => {
  return (
    <div>
      <header id="showcase">
        <div id="showcase-video" className="row d-flex align-items-center justify-content-center">
          <div className="col-8 col-lg-8 col-xl-6">
            <h3 className="text-center bg-light col-12">Less Meat, Less Heat, More Life...</h3>
            <div className="embed-responsive embed-responsive-16by9 rounded shadow-lg my-4">
              <video id="showcase-video" controls>
                <source src={video} />
              </video>
            </div>
          </div>
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

      <section className="bg-light py-5">
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
    </div>
  )
}

export default Home;