import styled from "styled-components";

const BannerStyle = styled.aside`
max-width: 450px;
margin-top: 260px;

&>h1{
    font-size: 3rem;
    color: ${({ theme}) => theme.color.fontHeroTitle};
    margin: 0;
}

&>p{
    font-size: 1.2rem;
    margin: 30px 0 35px 0;
    color: #929090;
}



`;

export default BannerStyle;