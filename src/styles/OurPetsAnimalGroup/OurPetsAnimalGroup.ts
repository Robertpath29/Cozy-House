import styled from "styled-components";


const OurPetsAnimalGroupStyle = styled.section`
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 50px;
background-color: ${({ theme }) => theme.color.secondary};

&>h1{
    font-size: ${({ theme }) => theme.sizes.title};
}
.custom-button{
    margin: 30px 10px 0 10px;

}

.custom-button-active{
    background-color: ${({ theme }) => theme.color.btnHover};
}


`;
export default OurPetsAnimalGroupStyle;