import styled from "styled-components";
import { headerStyleTypeProps } from "../../../types/headerType/headerStyleTypeProps";



const HeaderStyle = styled.header<headerStyleTypeProps>`
width: 100%;
padding-top: 30px;
padding-bottom: 30px;
background-color: ${({ pets }) => (pets ? "white" : "transparent")};

`

export default HeaderStyle;