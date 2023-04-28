import React from 'react';
import BannerStyle from '../../../styles/hero/banner/Banner.style';
import Button from '../../../UI/button/buttonMain/Button';
import { useNavigate } from 'react-router-dom';

const Banner = () => {

    const router = useNavigate();
    return (
        <BannerStyle>
            <h1>Не тільки людям потрібен будинок</h1>
            <p>На жаль, наш притулок не може прихистити усіх бездомних тварин, тож ми закликаємо усіх відповідально ставитися до своїх улюбленців, вчасно стерилізувати собак і котів, а також брати їх із притулків, а не купувати. </p>
            <Button onClick={()=> router("/ourpets")}>Заберіть друга</Button>
        </BannerStyle>
    );
};
export default Banner;