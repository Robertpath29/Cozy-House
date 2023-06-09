import styled from "styled-components";
import { headerStyleTypeProps } from "../../../../types/headerType/headerStyleTypeProps";


const NavStyle = styled.nav<headerStyleTypeProps>`

&>:not(:last-child){
margin-right: 50px;
};


&>a{
font-size: 1.2rem;
color: ${({ theme, pets }) => (pets ? theme.color.font : theme.color.fontNav)};
text-decoration: none;
position: relative;
};

&>a::before{

    content: "";
    position: absolute;
    bottom: -7px;
    left: 0;
    width: 0;
    height: 3px;
    background-color: ${({ theme }) => theme.color.btn};
    border-radius: 10px;
    transition: width 0.3s; 
    
};

&>a:hover::before{
    width: 100%;
}

`

export default NavStyle;