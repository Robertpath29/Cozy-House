import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselPetsButtonGroup from '../../../UI/button/buttonCarouselPets/CarouselPetsButtonGroup';
import responsive from '../../../config/configCarousel/configResponsive';
import CardAnimal from './CardAnimal';
import { useGetAnimalQuery } from '../../../api/api';
import IItems from "../../../types/CarouselType/IItems";


const CarouselPets: React.FC = () => {
  const { isLoading, error, data } = useGetAnimalQuery(undefined);

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      draggable={false}
      removeArrowOnDeviceType={['tablet', 'mobile']}
      containerClass="carousel-container"
      arrows={false}
      customButtonGroup={<CarouselPetsButtonGroup next={() => { }} previous={() => { }} />}
      autoPlay={true}
      autoPlaySpeed={5000}

    >
      {
        isLoading ? <div>loading...</div>
          : error ? <div>error</div>
            : data.map((item: IItems) => {
              if (item.id > 3) return null
              return <CardAnimal key={item.id} item={item} />
            }
            )
      }




    </Carousel>
  );
};

export default CarouselPets;
