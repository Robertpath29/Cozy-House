import React from 'react';
import DonationStyle from '../../styles/donation/Donation.style';
import Container from '../../styles/container/container.style';
import BankInfo from './BankInfo';

const Donation = () => {
    return (
        <DonationStyle>
            <Container justify='space-around'>
                <img src="./img/DogDonation.webp" alt="Dog" />
                <BankInfo />
            </Container>
        </DonationStyle>
    );
};

export default Donation;