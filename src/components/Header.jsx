import React, { useState } from 'react';
// image
import Logo from '../assets/img/logo.png';
// icons
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function Header() {

  // state
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  }

  return (
    <>
      <header className='pt-5 pb-5' id='header'>
        <div className="container">
          <div className="row">
            <div className="logo-area">
              <a href="#header"><img src={Logo} alt="logo" /></a>
            </div>
            <div className="menu-area">
              <ul>
                <li>
                  <a className='nav-link' href="#header">Home</a>
                </li>
                <li>
                  <a className='nav-link' href="#header">about</a>
                </li>
                <li>
                  <a className='nav-link' href="#header">work</a>
                </li>
                <li>
                  <a className='nav-link' href="#header">premium products</a>
                </li>
                <li>
                  <a className='nav-link' href="#header">blog</a>
                </li>
                <li>
                  <a className='btn' href="#header">start a project</a>
                </li>
              </ul>
              <p className='burger-icon' onClick={handleShow}>
                <BiMenuAltRight />
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* mobile slidable menu */}
      <div class={ `mobile-slidable-area ${ show ? 'show' : '' }` }>
        <div className="logo-part row mb-10">
          <div className="col">
            <a href="#header"><img src={Logo} alt="logo" /></a>
          </div>
          <div className='col'>
            <p className="close-icon" onClick={handleShow}>
              <AiOutlineCloseCircle />
            </p>
          </div>
        </div>

        <div className="menus">
          <ul>
            <li>
              <a className='' href="#header">Home</a>
            </li>
            <li>
              <a className='' href="#header">about</a>
            </li>
            <li>
              <a className='' href="#header">work</a>
            </li>
            <li>
              <a className='' href="#header">premium products</a>
            </li>
            <li>
              <a className='' href="#header">blog</a>
            </li>
          </ul>
        </div>
      </div>

    </>
  )
}
