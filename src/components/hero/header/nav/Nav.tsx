import React from 'react';
import NavStyle from '../../../../styles/hero/header/nav/Nav.style';
import { headerStyleTypeProps } from '../../../../types/headerType/headerStyleTypeProps';
import { Link } from 'react-router-dom';

const Nav:React.FC<headerStyleTypeProps> = ({pets}) => {
    return (
        <NavStyle pets={pets}>
            <Link to="/">Про притулок</Link>
            <Link to="/ourpets">Наші тваринки</Link>
            <Link to="#">Допоможіть притулку</Link>
            <Link to="#">Контакти</Link>
        </NavStyle>
    );
};

export default Nav;