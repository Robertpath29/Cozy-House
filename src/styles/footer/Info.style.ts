import styled from "styled-components";


const InfoStyle = styled.div`
display: flex;
flex-direction: column;
width: 30%;
margin-bottom: 50px;
&>h1{
    font-size: ${({theme})=>theme.sizes.title};
    color: ${({theme})=>theme.color.fontFooterTitle};
}

&>span{
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    color: ${({theme})=>theme.color.fontFooterContact};
    &>svg{
        font-size: 3rem;
        margin-right: 20px;
    }
}

`;

export default InfoStyle;