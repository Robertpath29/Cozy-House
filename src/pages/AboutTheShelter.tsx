import React from 'react';
import Hero from '../components/hero/Hero';
import CarouselAnimal from '../components/carouselAnimal/CarouselAnimal';
import CozyHouseHelp from '../components/cozyHouseHelp/CozyHouseHelp';
import Donation from '../components/donation/Donation';
import Footer from '../components/footer/Footer';
import About from '../components/about/About';

const AboutTheShelter = () => {
    return (
        <>
            <Hero />
            <main>
                <About />
                <CarouselAnimal />
                <CozyHouseHelp />
                <Donation />
            </main>
            <Footer />

        </>
    );
};

export default AboutTheShelter;