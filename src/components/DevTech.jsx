import React from 'react';
// image 
import underline from '../assets/img/Underline.png';
import php from '../assets/img/dev-tech/1.png';
import js from '../assets/img/dev-tech/2.png';
import html from '../assets/img/dev-tech/3.png';
import css from '../assets/img/dev-tech/4.png';
import node from '../assets/img/dev-tech/5.png';
// for react tab
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function DevTech() {
  return (
    <section className='dev-tech-area pb-100'>
      <div className="container">
        <h2 className="section-heading font-overlock text-center font-700 mb-60">
          <span className="position-relative">Our Dev Technology
            <img src={underline} alt="" className='img-fluid position-absolute' />
          </span>
        </h2>

        {/* tab */}
        <Tabs>
            <TabList>
              <Tab>Programming Languages</Tab>
              <Tab>Frameworks</Tab>
              <Tab>Databases</Tab>
              <Tab>Mobile Platforms</Tab>
            </TabList>

            <TabPanel>
              <div className="dev-tech-logos">
                <div className="row">
                  <div className="col">
                    <img src={php} alt="" className="img-fluid" />
                  </div>
                  <div className="col">
                    <img src={js} alt="" className="img-fluid" />
                  </div>
                  <div className="col">
                    <img src={html} alt="" className="img-fluid" />
                  </div>
                  <div className="col">
                    <img src={css} alt="" className="img-fluid" />
                  </div>
                  <div className="col">
                    <img src={node} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="dev-tech-logos">
                <div className="row">
                  <div className="col">
                    <img src={php} alt="" className="img-fluid" />
                  </div>
                  <div className="col">
                    <img src={js} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="dev-tech-logos">
                <div className="row">
                  <div className="col">
                    <img src={php} alt="" className="img-fluid" />
                  </div>
                  <div className="col">
                    <img src={js} alt="" className="img-fluid" />
                  </div>
                  <div className="col">
                    <img src={html} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="dev-tech-logos">
                <div className="row">
                  <div className="col">
                    <img src={php} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>

      </div>
    </section>
  )
}
