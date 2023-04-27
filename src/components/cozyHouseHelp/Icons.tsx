import React from 'react';
import IconsStyle from '../../styles/cozyHouseHelp/icons.style';
import IconsType from '../../types/CozyHouseHelp/IconsType';

const Icons: React.FC<IconsType> = ({ imagePath, name }) => {
    return (
        <IconsStyle>
            <img src={imagePath} alt={name} />
            <span>{name}</span>
        </IconsStyle>
    );
};

export default Icons;