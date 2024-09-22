import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <div >
      
      <Navbar />
      <div style={{background: "linear-gradient(to right, #fceabb, #ff5ccd )",
        display:"flex",
        justifyContent:"space-around",
        height:"590px"}}>
        <HeroSection />
        <Main/>
      </div>
      <div style={{
          height: "20px",
          background: "transparent"}}>
      </div>
      <div style={{background: "linear-gradient(to right, #fceabb, #ff5ccd )",
        display:"flex",
        justifyContent:"space-around",
        height:"800px",
        }}>
      <Testimonials/>
      <imagepart2/>
      </div>
      
      
      
      <Footer />
    </div>
  );
}

export default App;
