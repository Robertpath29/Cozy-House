import styled from "styled-components";



const CarouselBtnStyle = styled.div`

.custom-button{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
    background-color: transparent;
    border: 2px solid ${({theme})=> theme.color.btnHover};
    border-radius: 50%;
    transition: background-color 0.3s;
    cursor: pointer;

    

    &:hover{
    background-color: ${({theme})=> theme.color.btnHover};
}

}

.custom-button-previous{
    position: absolute;
    left: 0;
    top: 40%;
}
.custom-button-next{
    position: absolute;
    right: 0;
    top: 40%;
}

`;

export default CarouselBtnStyle;