import React from 'react';
import Container from '../../styles/container/container.style';
import SectionHero from '../../styles/hero/SectionHero.style';
import Header from './header/Header';






const Hero = () => {
    return (
        <SectionHero>
            <Container >
                <Header />
            </Container>
        </SectionHero>
    );
};

export default Hero;