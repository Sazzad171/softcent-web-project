import React from 'react';
// image
import underline from '../assets/img/Underline.png';
import videoImg from '../assets/img/video-img.jpg';

export default function Banner() {
  return (
    <section className='banner-area pt-80 pb-120'>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className='heading-text font-overlock font-700 mb-15'>
              <span className="underlined-text position-relative">
                Software
                <img src={underline} alt="" />
              </span> services for
              startups without 
              limits..
            </h1>
            <p className="details">
              We believe that great design should not be out of reach, so our services are less than half the price of a full-time designer.
            </p>
          </div>
        </div>

        {/* video */}
        <div className="video position-relative mt-60">
          <img src={videoImg} alt="" className="img-fluid" />
          <div className="pulse-play-btn">
            <a id="play-video" className="video-play-button popup-youtube" href="https://youtu.be/1PzqM6KE_54" target="_blank" rel='noreferrer'>
                <span></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
