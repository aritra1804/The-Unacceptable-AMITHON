import React from 'react';
import About from '../components/HomePage/About/About';
import DetailsSection from '../components/HomePage/DetailsSection/DetailsSection';
import Header from '../components/HomePage/Header/Header';
import HomeSection from '../components/HomePage/HomeSection/HomeSection';
import Features from '../components/HomePage/Features/Features';
import Footer from '../components/HomePage/Footer/Footer'
import Contact from '../components/HomePage/Contact/Contact';
import Team from '../components/HomePage/Team/Team'

const Home = () => {
  return (
      <div >
          <Header />
            <HomeSection />
            <About />
            <DetailsSection />
            <Features />
            <Team />
            <Contact />
          <Footer />
      </div>
  );
};

export default Home;
