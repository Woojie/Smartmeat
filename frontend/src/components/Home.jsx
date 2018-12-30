import React from 'react';

import video from '../resources/video/main.mp4'

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

      <section className="light">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 py-4">
              <h3 className="text-center">Vision</h3>
              <blockquote><p className="quotation">Green communities with green thinkers that aims for less meat, less heat and more life!</p></blockquote>
            </div>

            <div className="col-12 col-md-6 py-4">
              <h3 className="text-center">Mission</h3>
              <blockquote><p className="quotation">To raise eConsciousness and empower our generation on how we can positively contribute to the environment for daily life choices.</p></blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="light">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h3 className="text-center">Vision</h3>
              <p>"Green communities with green thinkers that aims for less meat, less heat and more life!"</p>
            </div>

            <div className="col-12 col-md-6">
              <h3 className="text-center">Mission</h3>
              <p>"To raise eConsciousness and empower our generation on how we can positively contribute to the environment for daily life choices."</p>
            </div>
          </div>
        </div>
      </section>

      

      {/* <section className="container my-5">
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
              <source src={video} />
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
            <img className="img-fluid" src="https://diylogodesigns.com/wp-content/uploads/2016/04/Mcdonalds-logo-png-Transparent-768x538.png" alt='logo4' />
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default Home;