import styled from "styled-components";





const AboutStyle = styled.section`
margin: 85px 0;

aside{
    padding: 0 140px;
}

aside>h1{
    margin: 0;
    font-size: ${({theme})=> theme.sizes.title};
    font-weight: 100;
}

aside>p{
    font-size: 1.3rem;
}

img{
    margin-left: 110px;
}


`;


export default AboutStyle;

