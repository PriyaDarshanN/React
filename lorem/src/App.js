import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <div style={{background: "linear-gradient(to right, #fceabb, #ff5ccd )"}}>
      <Navbar />
      <div style={{display:"flex",justifyContent:"space-around",gap:"0px"}}>
      <HeroSection />
      <Main>
      </Main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
