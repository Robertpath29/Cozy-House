import React from 'react';
import {MdAttachEmail} from "react-icons/md"
import {GiRotaryPhone} from "react-icons/gi"
import InfoStyle from '../../styles/footer/Info.style';


const Info = () => {
    return (
        <InfoStyle>
            <h1>Для питань і пропозицій</h1>
            <span><MdAttachEmail/> email@shelter.com</span>
            <span><GiRotaryPhone/>+13 674 567 75 54</span>
        </InfoStyle>
    );
};

export default Info;