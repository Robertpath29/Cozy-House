import React from 'react';
import Logo from './logo/Logo';
import Nav from './nav/Nav';
import HeaderStyle from '../../../styles/hero/header/Header.style';
import Container from '../../../styles/container/container.style';

const Header = () => {
    return (
        <HeaderStyle>
            <Container justify='space-between' align='center'>
                <Logo />
                <Nav />
            </Container>
        </HeaderStyle>
    );
};

export default Header;