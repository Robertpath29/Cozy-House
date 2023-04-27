import styled from "styled-components";


const InfoLocationStyle = styled.div`

display: flex;
flex-direction: column;
width: 30%;
margin-bottom: 50px;
&>h1{
    font-size: ${({ theme }) => theme.sizes.title};
    color: ${({ theme }) => theme.color.fontFooterTitle};
}

&>a{
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    text-decoration: none;
    color: ${({ theme }) => theme.color.fontFooterContact};
    &>svg{
        font-size: 4rem;
        margin-right: 20px;
    }
}
`;

export default InfoLocationStyle;