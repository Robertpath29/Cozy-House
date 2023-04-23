import React from 'react';
import Container from '../../styles/container/container.style';
import SectionHero from '../../styles/hero/SectionHero.style';
import Header from './header/Header';
import Banner from './banner/Banner';






const Hero = () => {
    return (
        <SectionHero>
            <Container direction='column'>
                <Header />
                <Banner />
            </Container>
        </SectionHero>
    );
};

export default Hero;