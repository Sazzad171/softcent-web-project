// components
import Header from './components/Header';
import Banner from './components/Banner';
import Customers from './components/Customers';
import WhatWeDo from './components/WhatWeDo';
import OurProducts from './components/OurProducts';
import Pricing from './components/Pricing';
import Testimonial from './components/Testimonial';
import Portfolio from './components/Portfolio';
import DevTech from './components/DevTech';
import DesignTech from './components/DesignTech';
import Workflow from './components/Workflow';
import Footer from './components/Footer';

// image
import Shadow1 from './assets/img/shadow-1.png';
import Shadow2 from './assets/img/shadow-2.png';

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Customers />
        <WhatWeDo />
        <OurProducts />
        <Pricing />
        <Testimonial />
        <Portfolio />
        <DevTech />
        <DesignTech />
        <Workflow />
      </main>

      {/* round bg shadow */}
      <img src={Shadow1} alt="" className="shadow-1" />
      <img src={Shadow2} alt="" className="shadow-2" />

      <Footer />
    </>
  );
}

export default App;