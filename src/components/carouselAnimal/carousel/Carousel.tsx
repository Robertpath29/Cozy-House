import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselPetsButtonGroup from '../../../UI/button/buttonCarouselPets/CarouselPetsButtonGroup';
import responsive from '../../../config/configCarousel/configResponsive';
import items from '../../../config/configCarousel/configItems';
import CardAnimal from './CardAnimal';


const CarouselPets: React.FC = () => {

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
      {items.map(item =>
        <CardAnimal key={item.id} item={item} />
      )}
    </Carousel>
  );
};

export default CarouselPets;
