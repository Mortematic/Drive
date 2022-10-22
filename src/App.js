import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Find from './Components/Find/Find';
import Driver from './Components/Driver/Driver';
import Luxury from './Components/Luxury/Luxury';
import Footer from './Components/Footer/Footer';

function App() {
  return (
   <div>
     <Navbar />
     <Hero />
     <Find />
     <Driver />
     <Luxury />
     <Footer />
   </div>
  );
}

export default App;
