import styled from "styled-components";
import IContainer from "../../types/IContainer";


const Container = styled.div<IContainer>`
margin: 0 auto;
display: flex;
max-width: ${({ theme }) => theme.sizes.container.maxWidthContent};
justify-content: ${({ justify }) => justify || "start"} ;
align-items:${({ align }) => align || "start"} ;
flex-direction: ${({ direction }) => direction || "row"};
flex-wrap: ${({ wrap }) => wrap || "nowrap"};


`

export default Container

