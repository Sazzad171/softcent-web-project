import React, { useState } from 'react';
// image
import underline from '../assets/img/Underline.png';
import videoImg from '../assets/img/video-img.jpg';
import dottedImg from '../assets/img/banner-dotted-shape.png';
// video modal
import Modal from 'react-modal';

// object for modal
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Banner() {

  // state for modal
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className='banner-area position-relative pt-80 pb-120'>
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
            <span className="video-play-button" onClick={openModal}>
                <span></span>
            </span>
          </div>
        </div>

        {/* modal */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={false}
        >
          <iframe className='popup-video-iframe' src="https://www.youtube.com/embed/ER9SspLe4Hg" title="Introduction to JavaScript + Setup | JavaScript Tutorial in Hindi #1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Modal>
      </div>

    {/* dotted image */}
    <img src={dottedImg} className="img-fluid dotted-img" alt="" />

    </section>
  )
}
