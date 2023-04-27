
import styled from "styled-components";

const NumberCardStyle = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
font-size: 2.5rem;
background-color: ${({theme})=>theme.color.btn};
border-radius: 10px;
padding: 10px;
margin-top: 10px;


&>:first-child{
    font-size: 2.7rem;
}


`;

export default NumberCardStyle;
