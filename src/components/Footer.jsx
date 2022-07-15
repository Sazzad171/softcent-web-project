import React from 'react';
// image
import Logo from '../assets/img/logo.png';
// icons
import { FaFacebookF, FaWhatsapp, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='pt-50'>
      <div className="container">
        {/* footer top */}
        <div className="footer-top">
          <div className="row">
            <div className="col-md-6">
              <h2 className="heading font-overlock font-700">Looking for a <br />
                Software Partner?</h2>
            </div>
            <div className="col-md-6">
              <p className='start-project-btn'>
                <a href="#project" className="btn">Start a project</a>
              </p>
            </div>
          </div>
        </div>

        {/* footer middle */}
        <div className="footer-middle pt-60 pb-60">
          <div className="row">
            <div className="col-5">
              <div className="company-details">
                <img src={Logo} alt="" className="img-fluid" />
                <p className="details mb-10">
                  Get a fully stacked design team that will give you accessible design, exhaustive research, and an outstanding experience.
                </p>
                <p className="email-phn mb-10">Email: info@softcent.eu</p>
                <p className="email-phn mb-15">Phone: +880 1679383665</p>
                <ul className="social-links">
                  <li>
                    <a href="#f" className='fbIcon'><FaFacebookF /></a>
                  </li>
                  <li>
                    <a href="#f" className='whatsappIcon'><FaWhatsapp /></a>
                  </li>
                  <li>
                    <a href="#f" className='twitterIcon'><FaTwitter /></a>
                  </li>
                  <li>
                    <a href="#f" className='instaIcon'><FaInstagram /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="link-area">
                <h5 className="heading mb-10">Company</h5>
                <ul>
                  <li>
                    <a href="#a" className='link'>About us</a>
                  </li>
                  <li>
                    <a href="#o" className='link'>Our portfolio</a>
                  </li>
                  <li>
                    <a href="#o" className='link'>Our Product</a>
                  </li>
                  <li>
                    <a href="#o" className='link'>Our Team</a>
                  </li>
                  <li>
                    <a href="#o" className='link'>Our Priceing</a>
                  </li>
                  <li>
                    <a href="#t" className='link'>Testimonials</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="link-area">
                <h5 className="heading mb-10">Our Service</h5>
                <ul>
                  <li>
                    <a href="#m" className='link'>Marketing</a>
                  </li>
                  <li>
                    <a href="#u" className='link'>UI/UX Design</a>
                  </li>
                  <li>
                    <a href="#g" className='link'>Graphic Design (Branding)</a>
                  </li>
                  <li>
                    <a href="#d" className='link'>Development</a>
                  </li>
                  <li>
                    <a href="#n" className='link'>New Products</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="link-area">
                <h5 className="heading mb-10">Supports</h5>
                <ul>
                  <li>
                    <a href="#f" className='link'>FAQs</a>
                  </li>
                  <li>
                    <a href="#s" className='link'>Support Policy</a>
                  </li>
                  <li>
                    <a href="#p" className='link'>Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#t" className='link'>Terms of Service</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* footer bottom */}
        <div className="footer-bottom pt-10 pb-10">
          <p className="copyright-text">
          &copy; 2022, Softcent EU, A European IT company
          </p>
        </div>
      </div>
    </footer>
  )
}
