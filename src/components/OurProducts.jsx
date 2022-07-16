import React from 'react';
// image 
import underline from '../assets/img/Underline.png';
import swipxyz from '../assets/img/products/swip-xyz.jpg';
import cashback from '../assets/img/products/cashback.jpg';

export default function OurProducts() {
  return (
    <section className='our-products-area pt-70 pb-70'>
      <div className="container">
        <div className="row heading-area">
          <div className="col-md-6 mb-10">
            <h2 className="section-heading font-overlock font-700 mb-30">
              <span className="position-relative">Our Products
                <img src={underline} alt="" className='img-fluid position-absolute' />
              </span>
            </h2>
            <p className='details'>
              We believe that great design should not be out of reach, so our services are less than half the price of a full-time designer.
            </p>
          </div>
          <div className="col-md-6 mb-10">
            <p className="see-more-btn">
              <a href="#more" className="btn">See More</a>
            </p>
          </div>
        </div>
      </div>

      <div className="product-show-area mt-50">
        <div className="row product-1">
          <div className="col-md-6">
            <div className="details-area">
              <div className="inner">
                <h2 className="heading font-overlock font-700 mb-20">
                  SwipeXYZ Product
                </h2>
                <p className="details mb-20">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <p>
                  <a href="#view" className="btn">View Product</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-area">
              <img src={swipxyz} alt="" className="img-fluid" />
            </div>
          </div>
        </div>

        <div className="row product-2">
          <div className="col-md-6">
            <div className="img-area">
              <img src={cashback} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="details-area right">
              <div className="inner">
                <h2 className="heading font-overlock font-700 mb-20">
                  Cashback Product
                </h2>
                <p className="details mb-20">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <p>
                  <a href="#view" className="btn">View Product</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
