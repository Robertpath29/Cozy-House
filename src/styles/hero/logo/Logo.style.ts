import styled from "styled-components";



const LogoStyle = styled.div`
&>h1{
margin: 0;
font-size: 2rem;
color: ${({theme})=> theme.color.fontLogo};
}

&>p{
    margin: 10px 0 0 0;
    color: #ffff;
    font-size: 1rem;
}



`;

export default LogoStyle;