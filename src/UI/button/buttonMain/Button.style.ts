import styled from "styled-components";



const ButtonStyle = styled.button`
background-color: ${({ theme }) => theme.color.btn};
border: 0px;
height: 50px;
padding: 10px 35px;
border-radius: 50px;
color: ${({ theme }) => theme.color.fontBtn};
transition: background-color 0.3s;
cursor: pointer;


&:hover{
    background-color: ${({ theme }) => theme.color.btnHover};
}
`;

export default ButtonStyle;