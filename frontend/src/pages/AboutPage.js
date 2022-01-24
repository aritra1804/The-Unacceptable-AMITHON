import React from 'react';
import AboutSection from '../components/AboutPage/AboutSection/AboutSection';
import Motivation from '../components/AboutPage/Motivation/Motivation';
import ProductDescription from '../components/AboutPage/ProductDescription/ProductDescription';
import TechStack from '../components/AboutPage/TechStack/TechStack';
import Footer from '../components/HomePage/Footer/Footer';
import Header from '../components/HomePage/Header/Header';

const AboutPage = () => {
  return (
      <>
      <Header />
        <AboutSection />
        <Motivation />
        <ProductDescription />
        <TechStack />
        <Footer />
      </>
  );
};

export default AboutPage;
