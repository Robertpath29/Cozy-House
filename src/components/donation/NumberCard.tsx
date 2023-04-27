import React from 'react';
import NumberCardStyle from '../../styles/donation/NumberCard.style';
import {BsCreditCard2Front} from "react-icons/bs"

const NumberCard = () => {
    return (
        <NumberCardStyle>
            <BsCreditCard2Front/>
            <span>8380 2880 8028 8791 7435</span>
        </NumberCardStyle>
    );
};

export default NumberCard;