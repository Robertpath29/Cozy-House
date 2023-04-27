import React from 'react';
import NavStyle from '../../../../styles/hero/header/nav/Nav.style';
import { headerStyleTypeProps } from '../../../../types/headerType/headerStyleTypeProps';

const Nav:React.FC<headerStyleTypeProps> = ({pets}) => {
    return (
        <NavStyle pets={pets}>
            <a href="#">Про притулок</a>
            <a href="#">Наші тваринки</a>
            <a href="#">Допоможіть притулку</a>
            <a href="#">Контакти</a>
        </NavStyle>
    );
};

export default Nav;