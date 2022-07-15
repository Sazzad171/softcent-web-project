import React from 'react';
// image
import underline from '../assets/img/Underline.png';
import branding from '../assets/img/what-we-do/branding.png';
import ux from '../assets/img/what-we-do/UX.png';
import shape1 from '../assets/img/what-we-do/shape-1.png';
import shape2 from '../assets/img/what-we-do/shape-2.png';

export default function WhatWeDo() {
  return (
    <section className='what-we-do-area pb-120 position-relative'>
      <div className="container">
        <h2 className="section-heading font-overlock font-700">
          <span className="position-relative">What We Do
            <img src={underline} alt="" className='img-fluid position-absolute' />
          </span>
        </h2>

        <div className="working-topics row mt-60">
          <div className="col">
            <h3 className="topic-heading font-overlock font-700 mb-20">
              <img src={branding} alt="" /> Branding
            </h3>
            <ul>
              <li className='mb-10'>Brand Strategy</li>
              <li className='mb-10'>Social Media</li>
              <li className='mb-10'>Marketing Assets</li>
              <li className='mb-10'>Presentations</li>
              <li className='mb-10'>Build MVP versions</li>
              <li className='mb-10'>Pitch Deck</li>
            </ul>
          </div>
          <div className="col">
            <h3 className="topic-heading font-overlock font-700 mb-20">
              <img src={ux} alt="" /> UI/UX Design
            </h3>
            <ul>
              <li className='mb-10'>User Interface</li>
              <li className='mb-10'>User Experience</li>
              <li className='mb-10'>Design System</li>
              <li className='mb-10'>Wireframe</li>
              <li className='mb-10'>Prototype</li>
              <li className='mb-10'>Website & Mobile App</li>
            </ul>
          </div>
          <div className="col">
            <h3 className="topic-heading font-overlock font-700 mb-20">
              <img src={ux} alt="" /> Development
            </h3>
            <ul>
              <li className='mb-10'>Front End (HTML, CSS, React)</li>
              <li className='mb-10'>Backend (Node.js, MongoDB)</li>
              <li className='mb-10'>iOS (Swift)</li>
              <li className='mb-10'>Android (Kotlin, Flutter)</li>
              <li className='mb-10'>Blockchain Development (NFT)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* shape images */}
      <img src={shape1} alt="" className="shape-1 img-fluid position-absolute" />
      <img src={shape2} alt="" className="shape-2 img-fluid position-absolute" />
    </section>
  )
}
