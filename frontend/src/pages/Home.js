import React from 'react';
import About from '../components/HomePage/About/About';
import DetailsSection from '../components/HomePage/DetailsSection/DetailsSection';
import Header from '../components/HomePage/Header/Header';
import HomeSection from '../components/HomePage/HomeSection/HomeSection';
import Features from '../components/HomePage/Features/Features';

const Home = () => {
  return (
      <div >
          <Header />
          <main className="max-w-8xl mx-auto px-8 sm:px-16">
            <HomeSection />
            <About />
            <DetailsSection />
            <Features />
          </main>
      </div>
  );
};

export default Home;
