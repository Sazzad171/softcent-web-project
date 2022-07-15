import React from 'react';
// image
import underline from '../assets/img/Underline.png';
import customer1 from '../assets/img/customers/1.png';
import customer2 from '../assets/img/customers/2.png';
import customer3 from '../assets/img/customers/3.png';
import customer4 from '../assets/img/customers/4.png';

export default function Customers() {
  return (
    <section className='customers-area pb-120'>
      <div className="container">
        <h2 className="section-heading font-overlock font-700">
          <span className="position-relative">Our Customers
            <img src={underline} alt="" className='img-fluid position-absolute' />
          </span>
        </h2>

        <div className="logo-area row mt-60">
          <div className="logo-item">
            <img src={customer1} alt="" className="img-fluid" />
          </div>
          <div className="logo-item">
            <img src={customer2} alt="" className="img-fluid" />
          </div>
          <div className="logo-item">
            <img src={customer3} alt="" className="img-fluid" />
          </div>
          <div className="logo-item">
            <img src={customer4} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}
