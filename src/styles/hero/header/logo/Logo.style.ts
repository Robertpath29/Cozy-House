import styled from "styled-components";
import { headerStyleTypeProps } from "../../../../types/headerType/headerStyleTypeProps";



const LogoStyle = styled.div<headerStyleTypeProps>`


&>h1{
margin: 0;
font-size: 2rem;
color: ${({ theme, pets }) => (pets ? theme.color.font : theme.color.btn)};
}

&>p{
    margin: 10px 0 0 0;
    color: ${({ theme, pets }) => (pets ? theme.color.font : theme.color.btn)};
    font-size: 1rem;
}



`;

export default LogoStyle;