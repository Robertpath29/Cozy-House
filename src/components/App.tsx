import React from 'react';
import Hero from './hero/Hero';
import About from './about/About';
import CarouselAnimal from './carouselAnimal/CarouselAnimal';
import CozyHouseHelp from './cozyHouseHelp/CozyHouseHelp';
import Donation from './donation/Donation';


function App() {
  return (
    <>
      <Hero />
      <main>
        <About/>
        <CarouselAnimal/>
        <CozyHouseHelp/>
        <Donation/>

    
      </main>


    </>
  );
}

export default App;
