import React from 'react';
import FooterStyle from '../../styles/footer/Footer.style';
import Info from './Info';
import InfoLocation from './InfoLocation';
import Container from '../../styles/container/container.style';

const Footer = () => {
    return (
        <FooterStyle className='scroll-to-footer'>
            <Container justify='space-between'>
                <Info />
                <InfoLocation />
                <img src="./img/DogFooter.webp" alt="Dog" />
            </Container>
        </FooterStyle>
    );
};

export default Footer;