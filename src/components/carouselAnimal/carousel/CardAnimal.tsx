import React from 'react';
import CardAnimalStyle from '../../../styles/CarouselAnimal/Carousel/CardAnimal.style';
import ICardAnimal from '../../../types/CarouselType/ICardAnimal';
import Button from '../../../UI/button/buttonMain/Button';
import { useNavigate, useParams } from 'react-router-dom';





const CardAnimal: React.FC<ICardAnimal> = ({ item }) => {
    const router = useNavigate();
    

    return (
        <>
            <CardAnimalStyle>
                <img src={item.imgSrc} alt={item.name} />
                <h1>{item.name}</h1>
                <Button onClick={() => { router(`/ourpets/animal/${item.id}`) }}>Детальніше</Button>
            </CardAnimalStyle>
        </>
    );
};

export default CardAnimal;