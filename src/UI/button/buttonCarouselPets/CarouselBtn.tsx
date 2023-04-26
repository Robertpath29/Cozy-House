import React, { FC } from 'react';
import CarouselBtnStyle from './carouselBtn.style';
import IBtn from '../buttonType';

const CarouselBtn: FC<IBtn> = ({ className, onClick, children }) => {
    return (
        <CarouselBtnStyle>
            <button className={className} onClick={onClick}>
                {children}
            </button>
        </CarouselBtnStyle>
    );
};

export default CarouselBtn;