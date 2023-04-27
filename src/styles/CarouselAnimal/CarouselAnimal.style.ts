import styled from "styled-components";



const CarouselAnimalStyle = styled.section`

background-color: ${({ theme }) => theme.color.secondary};

padding: 50px 0;

.carousel-container{
    width: ${({ theme }) => theme.sizes.container.maxWidthContent};
    margin-bottom: 40px    ;
  
}

.carousel-title{
    font-size: ${({theme})=> theme.sizes.title};
    margin: 0 0 30px 0;
}
`

export default CarouselAnimalStyle;