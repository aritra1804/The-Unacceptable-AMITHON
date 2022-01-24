import React from 'react';
import AboutSection from '../components/AboutPage/AboutSection/AboutSection';
import Motivation from '../components/AboutPage/Motivation/Motivation';
import Footer from '../components/HomePage/Footer/Footer';
import Header from '../components/HomePage/Header/Header';

const AboutPage = () => {
  return (
      <>
      <Header />
        <AboutSection />
        <Motivation />
        <Footer />
      </>
  );
};

export default AboutPage;
