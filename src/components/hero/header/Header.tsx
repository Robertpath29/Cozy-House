import React from 'react';
import Logo from './logo/Logo';
import Nav from './nav/Nav';
import HeaderStyle from '../../../styles/hero/header/Header.style';
import Container from '../../../styles/container/container.style';
import { headerStyleTypeProps } from '../../../types/headerType/headerStyleTypeProps';

const Header: React.FC<headerStyleTypeProps> = ({ pets }) => {
    return (
        <HeaderStyle pets={pets}>
            <Container justify='space-between' align='center'>
                <Logo pets={pets} />
                <Nav pets={pets} />
            </Container>
        </HeaderStyle>
    );
};

export default Header;