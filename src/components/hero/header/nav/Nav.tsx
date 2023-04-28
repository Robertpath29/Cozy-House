import React from 'react';
import NavStyle from '../../../../styles/hero/header/nav/Nav.style';
import { headerStyleTypeProps } from '../../../../types/headerType/headerStyleTypeProps';
import { Link } from 'react-router-dom';
import { animateScroll as scroll, scroller } from 'react-scroll';

const Nav: React.FC<headerStyleTypeProps> = ({ pets }) => {


    function handleElementScroll(className:string) {
        setTimeout(() => {
            scroller.scrollTo(className, {
                duration: 1500,
                delay: 0,
                smooth: 'easeInOutQuart',
            });
        })
    }


    return (
        <NavStyle pets={pets}>
            <Link to="/">Про притулок</Link>
            <Link to="/ourpets">Наші тваринки</Link>
            <Link to="/" onClick={() => handleElementScroll("scroll-to-donation")}>Допоможіть притулку</Link>
            <Link to="/" onClick={() => handleElementScroll("scroll-to-footer")}>Контакти</Link>
        </NavStyle>
    );
};

export default Nav;