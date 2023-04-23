import React, { FC } from 'react';
import ButtonStyle from './Button.style';
import IBtn from './buttonType';




const Button: FC<IBtn> = ({ children}) => {
    return (
        <ButtonStyle>
            {children}
        </ButtonStyle>
    );
};

export default Button;