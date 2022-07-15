import React from 'react';
// image 
import underline from '../assets/img/Underline.png';
// for react tab
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// icons
import { AiOutlineCheck } from 'react-icons/ai';

export default function Pricing() {
  return (
    <section className='pricing-area pt-120 pb-120'>
      <div className="container">
        <div className="section-heading-area">
          <div className="row">
            <div className="col-md-6">
              <h2 className="section-heading font-overlock text-center font-700 mb-35">
                <span className="position-relative">Pricing Package Choose Your Plan
                  <img src={underline} alt="" className='img-fluid position-absolute' />
                </span>
              </h2>
              <p className="details text-center">
                We believe that great design should not be out of reach, so our services are less than half the price of a full-time designer.
              </p>
            </div>
          </div>
        </div>

        <div className="tab-area mt-20">
          <Tabs>
            <TabList>
              <Tab>Monthly</Tab>
              <Tab>Yearly</Tab>
            </TabList>

            <TabPanel>
              <div className="row">
                <div className="col">
                  <div className="price-item">
                    <div className="title mb-30">
                      <h3 className='font-overlock font-700'>
                        <span className="position-relative">
                          Marketing
                        </span>
                      </h3>
                      <h6 className='font-overlock font-700'>$899/ mo</h6>
                    </div>
                    <ul className='price-items mb-30'>
                      <li>
                        <AiOutlineCheck /> Dedicated Designer
                      </li>
                      <li>
                        <AiOutlineCheck /> Unlimited requests
                      </li>
                      <li>
                        <AiOutlineCheck /> Unlimited brand profiles
                      </li>
                      <li>
                        <AiOutlineCheck /> Native source files
                      </li>
                      <li>
                        <AiOutlineCheck /> Real-time collaboration
                      </li>
                      <li>
                        <AiOutlineCheck /> Banner Ads
                      </li>
                      <li>
                        <AiOutlineCheck /> Clothing & Merchandise Design
                      </li>
                      <li>
                        <AiOutlineCheck /> Packaging & Label
                      </li>
                      <li>
                        <AiOutlineCheck /> Logo & Brand Guide
                      </li>
                    </ul>
                    <p>
                      <a href="#p" className='btn font-overlock'>$899 / mo</a>
                    </p>
                  </div>
                </div>
                
                <div className="col">
                  <div className="price-item middle-item">
                    <div className="title mb-30">
                      <h3 className='font-overlock font-700'>
                        <span className="position-relative">
                          UI/UX Design
                        </span>
                      </h3>
                      <h6 className='font-overlock font-700'>$1000/ mo</h6>
                    </div>
                    <ul className='price-items mb-30'>
                      <li>
                        <AiOutlineCheck /> Dedicated Designer
                      </li>
                      <li>
                        <AiOutlineCheck /> Unlimited requests
                      </li>
                      <li>
                        <AiOutlineCheck /> Unlimited brand profiles
                      </li>
                      <li>
                        <AiOutlineCheck /> Native source files
                      </li>
                      <li>
                        <AiOutlineCheck /> Real-time collaboration
                      </li>
                      <li>
                        <AiOutlineCheck /> Banner Ads
                      </li>
                      <li>
                        <AiOutlineCheck /> Clothing & Merchandise Design
                      </li>
                      <li>
                        <AiOutlineCheck /> Packaging & Label
                      </li>
                      <li>
                        <AiOutlineCheck /> Logo & Brand Guide
                      </li>
                    </ul>
                    <p>
                      <a href="#p" className='btn font-overlock'>$899 / mo</a>
                    </p>
                  </div>
                </div>

                <div className="col">
                  <div className="price-item">
                    <div className="title mb-30">
                      <h3 className='font-overlock font-700'>
                        <span className="position-relative">
                          Development
                        </span>
                      </h3>
                      <h6 className='font-overlock font-700'>$1000/ mo</h6>
                    </div>
                    <ul className='price-items mb-30'>
                      <li>
                        <AiOutlineCheck /> Dedicated Designer
                      </li>
                      <li>
                        <AiOutlineCheck /> Unlimited requests
                      </li>
                      <li>
                        <AiOutlineCheck /> Unlimited brand profiles
                      </li>
                      <li>
                        <AiOutlineCheck /> Native source files
                      </li>
                      <li>
                        <AiOutlineCheck /> Real-time collaboration
                      </li>
                      <li>
                        <AiOutlineCheck /> Banner Ads
                      </li>
                      <li>
                        <AiOutlineCheck /> Clothing & Merchandise Design
                      </li>
                      <li>
                        <AiOutlineCheck /> Packaging & Label
                      </li>
                      <li>
                        <AiOutlineCheck /> Logo & Brand Guide
                      </li>
                    </ul>
                    <p>
                      <a href="#p" className='btn font-overlock'>$899 / mo</a>
                    </p>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="row">
                <div className="col">
                  <div className="price-item">
                    <div className="title mb-30">
                      <h3 className='font-overlock font-700'>
                        <span className="position-relative">
                          Marketing
                        </span>
                      </h3>
                      <h6 className='font-overlock font-700'>$899/ yr</h6>
                    </div>
                    <ul className='price-items mb-30'>
                      <li>
                        <AiOutlineCheck /> Dedicated Designer
                      </li>
                      <li>
                        <AiOutlineCheck /> Unlimited requests
                      </li>
                      <li>
                        <AiOutlineCheck /> Unlimited brand profiles
                      </li>
                      <li>
                        <AiOutlineCheck /> Native source files
                      </li>
                      <li>
                        <AiOutlineCheck /> Real-time collaboration
                      </li>
                      <li>
                        <AiOutlineCheck /> Banner Ads
                      </li>
                      <li>
                        <AiOutlineCheck /> Clothing & Merchandise Design
                      </li>
                      <li>
                        <AiOutlineCheck /> Packaging & Label
                      </li>
                      <li>
                        <AiOutlineCheck /> Logo & Brand Guide
                      </li>
                    </ul>
                    <p>
                      <a href="#p" className='btn font-overlock'>$899 / yr</a>
                    </p>
                  </div>
                </div>
                
                <div className="col">
                  <div className="price-item middle-item">
                    <div className="title mb-30">
                      <h3 className='font-overlock font-700'>
                        <span className="position-relative">
                          UI/UX Design
                        </span>
                      </h3>
                      <h6 className='font-overlock font-700'>$1000/ yr</h6>
                    </div>
                    <ul className='price-items mb-30'>
                      <li>
                        <AiOutlineCheck /> Dedicated Designer
                      </li>
                      <li>
                        <AiOutlineCheck /> Unlimited requests
                      </li>
                      <li>
                        <AiOutlineCheck /> Unlimited brand profiles
                      </li>
                      <li>
                        <AiOutlineCheck /> Native source files
                      </li>
                      <li>
                        <AiOutlineCheck /> Real-time collaboration
                      </li>
                      <li>
                        <AiOutlineCheck /> Banner Ads
                      </li>
                      <li>
                        <AiOutlineCheck /> Clothing & Merchandise Design
                      </li>
                      <li>
                        <AiOutlineCheck /> Packaging & Label
                      </li>
                      <li>
                        <AiOutlineCheck /> Logo & Brand Guide
                      </li>
                    </ul>
                    <p>
                      <a href="#p" className='btn font-overlock'>$899 / yr</a>
                    </p>
                  </div>
                </div>

                <div className="col">
                  <div className="price-item">
                    <div className="title mb-30">
                      <h3 className='font-overlock font-700'>
                        <span className="position-relative">
                          Development
                        </span>
                      </h3>
                      <h6 className='font-overlock font-700'>$1000/ yr</h6>
                    </div>
                    <ul className='price-items mb-30'>
                      <li>
                        <AiOutlineCheck /> Dedicated Designer
                      </li>
                      <li>
                        <AiOutlineCheck /> Unlimited requests
                      </li>
                      <li>
                        <AiOutlineCheck /> Unlimited brand profiles
                      </li>
                      <li>
                        <AiOutlineCheck /> Native source files
                      </li>
                      <li>
                        <AiOutlineCheck /> Real-time collaboration
                      </li>
                      <li>
                        <AiOutlineCheck /> Banner Ads
                      </li>
                      <li>
                        <AiOutlineCheck /> Clothing & Merchandise Design
                      </li>
                      <li>
                        <AiOutlineCheck /> Packaging & Label
                      </li>
                      <li>
                        <AiOutlineCheck /> Logo & Brand Guide
                      </li>
                    </ul>
                    <p>
                      <a href="#p" className='btn font-overlock'>$899 / yr</a>
                    </p>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
