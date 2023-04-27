import styled from "styled-components";



const CozyHouseHelpStyle = styled.section`
padding: 70px 0;
display: flex;
flex-direction: column;
align-items: center;

&>h1{
    margin: 0;
    font-size: ${({theme})=>theme.sizes.title};
}

`;

export default CozyHouseHelpStyle;




