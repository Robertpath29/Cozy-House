import styled from "styled-components";

const DonationStyle = styled.section`
background-color: ${({theme})=>theme.color.secondary};
padding: 70px 0;

img{
    align-self: flex-end;
}
`;

export default DonationStyle;