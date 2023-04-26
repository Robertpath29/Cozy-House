import React from 'react';
import CardAnimalStyle from '../../../styles/CarouselAnimal/Carousel/CardAnimal.style';
import ICardAnimal from '../../../types/CarouselType/ICardAnimal';
import Button from '../../../UI/button/buttonMain/Button';


const CardAnimal: React.FC<ICardAnimal> = ({ item }) => {
    return (
        <CardAnimalStyle>
            <img src={item.imgSrc} alt={item.name} />
            <h1>{item.name}</h1>
            <Button>Детальніше</Button>
        </CardAnimalStyle>
    );
};

export default CardAnimal;