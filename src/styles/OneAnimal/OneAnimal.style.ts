import styled from "styled-components";


const OneAnimalStyle = styled.section`
height: 100vh;
background-color: ${({ theme }) => theme.color.secondary};
display: flex;
justify-content: center;
align-items: center;

.one-animal{
height: 500px;
box-shadow: 0 0 35px -15px black;
img{
    height: 100%;
    width: 50%;
}

.one-animal-text{
    position: relative;
    margin: 0 30px;
   
}
.custom-button{
    position: absolute;
    top: -117px;
    right: -92px;
}

}

`;

export default OneAnimalStyle;