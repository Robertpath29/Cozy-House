import React from 'react';
import Container from '../../styles/container/container.style';
import CarouselAnimalStyle from '../../styles/CarouselAnimal/CarouselAnimal.style';
import CarouselPets from './carousel/Carousel';
import Button from '../../UI/button/buttonMain/Button';
import { useNavigate } from 'react-router-dom';

const CarouselAnimal = () => {
    const router = useNavigate();
    return (
        <CarouselAnimalStyle>
            <Container align='center' direction='column' >
                <h1 className='carousel-title'>Наші друзі, які шукають будинок</h1>
                <CarouselPets />
                <Button onClick={()=> router("/ourpets")}>Знайомтесь з рештою</Button>
            </Container>
        </CarouselAnimalStyle>
    );
};

export default CarouselAnimal;