import React from 'react';
import Header from '../components/hero/header/Header';
import Footer from '../components/footer/Footer';
import OurPetsAnimalGroup from '../components/OurPetsAnimalGroup/OurPetsAnimalGroup';

const OurPets = () => {
    return (
        <>
            <Header pets/>
            <OurPetsAnimalGroup/>
            <Footer/>
        </>
    );
};

export default OurPets;