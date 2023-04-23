import React from 'react';
import BannerStyle from '../../../styles/hero/banner/Banner.style';
import Button from '../../../UI/button/Button';

const Banner = () => {
    return (
        <BannerStyle>
            <h1>Не тільки людям потрібен будинок</h1>
            <p>На жаль, наш притулок не може прихистити усіх бездомних тварин, тож ми закликаємо усіх відповідально ставитися до своїх улюбленців, вчасно стерилізувати собак і котів, а також брати їх із притулків, а не купувати. </p>
            <Button>Заберіть друга</Button>
        </BannerStyle>
    );
};

export default Banner;