import React, { useEffect, useState } from 'react';
import Container from '../styles/container/container.style';
import OneAnimalStyle from '../styles/OneAnimal/OneAnimal.style';
import CarouselBtn from '../UI/button/buttonCarouselPets/CarouselBtn';
import { useFetch } from '../hooks/useFetch';
import { fetchAnimal } from '../api/fetchAnimal';
import { useNavigate, useParams } from 'react-router-dom';
import IItems from '../types/CarouselType/IItems';

const OneAnimal = () => {
    const { id } = useParams();
    const [animalObj, setAnimalObj] = useState<IItems>();
    const router = useNavigate()

    const [getAnimalFetch, loading, error] = useFetch(async (page, id) => {
        const animalObj = await fetchAnimal(page, id);
        setAnimalObj(animalObj.data[0]);

    });

    useEffect(() => {
        getAnimalFetch(1, Number(id));
    }, [])




    return (
        <OneAnimalStyle>
            {
                loading ? <div>loading...</div>
                    : error ? <div>error</div>
                        : <Container className='one-animal' align='center'>
                            <img src={animalObj?.imgSrc} alt={animalObj?.name} />
                            <Container direction='column' className='one-animal-text'>
                                <h1>{ animalObj?.name}</h1>
                                <p>{animalObj?.description}</p>
                                <span>Вік: {animalObj?.age}</span>
                                <span>Щеплення: {animalObj?.inoculations}</span>
                                <span>Хвороби: {animalObj?.diseases}</span>
                                <span>Паразити: {animalObj?.parasites}</span>
                                <CarouselBtn className='custom-button' onClick={()=> router("/ourpets")}>X</CarouselBtn>
                            </Container>
                        </Container>
            }
        </OneAnimalStyle>
    );
};

export default OneAnimal;

