import React, { FC } from 'react';
import ButtonStyle from './Button.style';
import IBtn from '../buttonType';




const Button: FC<IBtn> = ({ children, onClick}) => {
    return (
        <ButtonStyle onClick={onClick}>
            {children}
        </ButtonStyle>
    );
};

export default Button;