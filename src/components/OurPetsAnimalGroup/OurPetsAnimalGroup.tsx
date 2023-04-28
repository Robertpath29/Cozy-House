import React, { MouseEvent, useEffect, useState } from 'react';
import OurPetsAnimalGroupStyle from '../../styles/OurPetsAnimalGroup/OurPetsAnimalGroup';
import Container from '../../styles/container/container.style';
import IItems from '../../types/CarouselType/IItems';
import CardAnimal from '../carouselAnimal/carousel/CardAnimal';
import { useFetch } from '../../hooks/useFetch';
import { fetchAnimal } from '../../api/fetchAnimal';
import { usePages } from '../../hooks/usePages';
import CarouselBtn from '../../UI/button/buttonCarouselPets/CarouselBtn';


const OurPetsAnimalGroup = () => {

    const [animals, setAnimal] = useState<IItems[]>([]);
    const [elem, setElem] = useState(0);
    const [activeBtn, setActiveBtn] = useState(1);
    const numberPages = usePages(elem);

    const [getAnimalFetch, loading, error] = useFetch(async (page) => {
        const animalObj = await fetchAnimal(page);
        setAnimal(animalObj.data);
        setElem(Number(animalObj.headers["x-total-count"]));
    });


    useEffect(() => {
        getAnimalFetch(1);
    }, []);


    function newPages(elem: number) {
        getAnimalFetch(elem)
        setActiveBtn(elem);
    }

    return (
        <OurPetsAnimalGroupStyle>
            <h1>Наші друзі, які шукають будинок</h1>
            <Container wrap='wrap'>
                {
                    loading ? <div>loading...</div>
                        : error ? <div>error</div>
                            : animals.map((item: IItems) =>
                                <CardAnimal key={item.id} item={item} />

                            )
                }
            </Container>
            <Container>
                {
                    numberPages.map(elem =>
                        <CarouselBtn className={elem === activeBtn ? "custom-button-active custom-button" : 'custom-button'} key={elem} onClick={() => newPages(elem)}>{elem}</CarouselBtn>

            )
                }
        </Container>
        </OurPetsAnimalGroupStyle >
    );
};

export default OurPetsAnimalGroup;