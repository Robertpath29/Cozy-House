import React from 'react';
import LogoStyle from '../../../../styles/hero/header/logo/Logo.style';
import { headerStyleTypeProps } from '../../../../types/headerType/headerStyleTypeProps';

const Logo:React.FC<headerStyleTypeProps> = ({pets}) => {
    return (
        <LogoStyle pets={pets}>
            <h1>Затишний Будинок</h1>
            <p>Притулок для домашніх тварин в Черкасах</p>
        </LogoStyle>
    );
};

export default Logo;