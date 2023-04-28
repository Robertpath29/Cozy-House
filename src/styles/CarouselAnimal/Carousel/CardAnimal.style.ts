import styled from "styled-components";



const CardAnimalStyle = styled.div`

max-width: 270px;
margin: 15px auto;
padding: 0 0 30px 0;
height: 400px;
display: flex;
flex-direction: column;
align-items: center;
background-color: ${({ theme }) => theme.color.primary};
border-radius: 10px;

&>h1{
    margin: 20px 0 ;
}

&>img{
    width: 100%;
    height: 250px;
   
}

&>button{
background-color: transparent;
border: 2px solid ${({theme})=> theme.color.btnHover};
}

&:hover{
    box-shadow: 0 0 21px -21px black;
}

`;


export default CardAnimalStyle;