import styled from "styled-components";



const LogoStyle = styled.div`
&>h1{
margin: 0;
font-size: 2rem;
color: ${({theme})=> theme.color.btn};
}

&>p{
    margin: 10px 0 0 0;
    color: ${({theme})=> theme.color.fontNav};
    font-size: 1rem;
}



`;

export default LogoStyle;