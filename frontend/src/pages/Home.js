import React from 'react';
import Header from '../components/HomePage/Header/Header';
import HomeSection from '../components/HomePage/HomeSection/HomeSection';

const Home = () => {
  return (
      <div >
          <Header />
          <main className="max-w-8xl mx-auto px-8 sm:px-16">
            <HomeSection />
          </main>
      </div>
  );
};

export default Home;
