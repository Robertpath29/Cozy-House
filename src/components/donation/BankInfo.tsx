import React from 'react';
import NumberCard from './NumberCard';
import BankInfoStyle from '../../styles/donation/BankInfo.style';

const BankInfo = () => {
    return (
        <BankInfoStyle>
            <h1>Крім того, ви
                можете зробити пожертву</h1>
            <span>Приват Банк / Ліцензія 01.01.2030</span>
            <NumberCard />
            <p>Притулок щодня піклується про майже 3 тисячі тварин. Найкращий спосіб допомогти нам
                і нашим хвостикам – пожертвувати будь-яку суму на корм, лікування та забезпечення роботи притулку.</p>
        </BankInfoStyle>
    );
};

export default BankInfo;