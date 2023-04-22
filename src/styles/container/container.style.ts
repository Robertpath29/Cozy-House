import styled from "styled-components";
import ContainerProps from "../../types/ContainerProps";


const Container = styled.div<ContainerProps>`
margin: 0 auto;
display: flex;
max-width: ${({ theme }) => theme.sizes.container.maxWidthContent};
justify-content: ${({ justify }) => justify || "start"} ;
align-items:${({ align }) => align || "start"} ;
flex-direction: ${({ direction }) => direction || "row"};
flex-wrap: ${({ wrap }) => wrap || "nowrap"};


`

export default Container

