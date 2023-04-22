import styled from "styled-components";


const SectionHero = styled.section`
margin: 0 auto;
max-width: ${({theme})=> theme.sizes.site.widthSite};
height: 100vh;
background-image: url("./img/background-hero.webp");
background-repeat: no-repeat;
background-size: cover;
background-position: center;

`;

export default SectionHero;