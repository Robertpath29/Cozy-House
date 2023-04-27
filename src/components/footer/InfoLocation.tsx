import React from 'react';
import InfoLocationStyle from '../../styles/footer/InfoLocation.style';
import {CiLocationOn} from "react-icons/ci"
const InfoLocation = () => {
    return (
        <InfoLocationStyle>
            <h1>Ми чекаємо вашого візиту</h1>
            <a href="https://www.google.com/maps/place/%D0%A1%D1%96%D1%80%D1%96%D1%83%D1%81/@49.4447174,32.0473801,19.89z/data=!4m6!3m5!1s0x40d14c86ea5d11ed:0xf704d92b35e48766!8m2!3d49.4448075!4d32.0473373!16s%2Fg%2F11c1xfk7b5" target='blank'><CiLocationOn/>вулиця Благовісна, 130, Черкаси, Черкаська область, 18000</a>
            <a href="https://www.google.com/maps/place/%D0%A0%D0%BE%D0%B7%D0%BF%D0%BB%D1%96%D0%B4%D0%BD%D0%B8%D0%BA+%22Royal+Moloss+Kennel%22/@49.4579737,31.9687835,13.85z/data=!4m6!3m5!1s0x40d14d686b4282a1:0x4cec12e0c7e2eede!8m2!3d49.4571182!4d31.9945003!16s%2Fg%2F11mw4xqxlf" target='blank'><CiLocationOn/>Пахарев Хутор, 26, Черкаси, Черкаська область, 18036</a>
        </InfoLocationStyle>
    );
};

export default InfoLocation;