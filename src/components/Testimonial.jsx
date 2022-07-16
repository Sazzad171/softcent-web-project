import React from 'react';
import Slider from "react-slick";
// image 
import underline from '../assets/img/Underline.png';
import testimonial from '../assets/img/testimonial.png';
import person from '../assets/img/person.png';
import bgShape from '../assets/img/testimonial-bg-shape.png';
import quoteStart from '../assets/img/quote-start.png';
import quoteEnd from '../assets/img/quote-end.png';

// slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  
  // slider settings
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className='testimonial-area pb-120'>
      <div className="container">
        <h2 className="section-heading font-overlock text-center font-700 mb-80">
          <span className="position-relative">Talk About Us!
            <img src={underline} alt="" className='img-fluid position-absolute' />
          </span>
        </h2>

        <div className="row main-row">
          <div className="col-md-6">
          <Slider {...settings}>
            <div>
              <div className="testimonial-content-area">
                <p className='comment position-relative'>
                  We had a bit of a slow and bumpy start, but after changing the designer on their side everything went in a very good direction. The designers were talented and easy to work with.
                  {/* quote icons */}
                  <img src={quoteStart} alt="" className="quote-start position-absolute img-fluid" />
                  <img src={quoteEnd} alt="" className="quote-end position-absolute img-fluid" />
                </p>
                <div className="row mt-40">
                  <img src={person} alt="" className="img-fluid person-img" />
                  <div>
                    <h4 className="person-name font-600">Shuvo Roy</h4>
                    <p className="designation">Softcent Co-Founder</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="testimonial-content-area">
                <p className='comment position-relative'>
                  Very good service. I like it and also recommend this software company.
                  {/* quote icons */}
                  <img src={quoteStart} alt="" className="quote-start position-absolute img-fluid" />
                  <img src={quoteEnd} alt="" className="quote-end position-absolute img-fluid" />
                </p>
                <div className="row mt-40">
                  <img src={person} alt="" className="img-fluid person-img" />
                  <div>
                    <h4 className="person-name font-600">Sazzad</h4>
                    <p className="designation">Frontend Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
          </div>
          <div className="col-md-6">
            <div className="testimonial-img position-relative">
              <img src={testimonial} alt="" className="img-fluid main-img" />
              {/* bg img */}
              <img src={bgShape} alt="" className="img-fluid bg-shape position-absolute" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
