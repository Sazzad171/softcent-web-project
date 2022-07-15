import React from 'react';
// image 
import underline from '../assets/img/Underline.png';
import figma from '../assets/img/design-tech/1.png';
import ins from '../assets/img/design-tech/2.png';
import xd from '../assets/img/design-tech/3.png';
import ps from '../assets/img/design-tech/4.png';
import ai from '../assets/img/design-tech/5.png';

export default function DesignTech() {
  return (
    <section className='design-tech-area pb-100'>
      <div className="container">
        <h2 className="section-heading font-overlock text-center font-700 mb-80">
          <span className="position-relative">Our Design Technology
            <img src={underline} alt="" className='img-fluid position-absolute' />
          </span>
        </h2>

        <div className="design-logos row">
          <div className="col">
            <img src={figma} alt="" className="img-fluid" /> 
          </div>
          <div className="col">
            <img src={ins} alt="" className="img-fluid" /> 
          </div>
          <div className="col">
            <img src={xd} alt="" className="img-fluid" /> 
          </div>
          <div className="col">
            <img src={ps} alt="" className="img-fluid" /> 
          </div>
          <div className="col">
            <img src={ai} alt="" className="img-fluid" /> 
          </div>
        </div>
      </div>
    </section>
  )
}
