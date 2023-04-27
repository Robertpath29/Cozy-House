import styled from "styled-components";

const BankInfoStyle = styled.div`
    width: 500px;
&>h1{
    font-size: ${({theme})=>theme.sizes.title};
    margin: 0 0 30px 0;
}
&>p{
    margin: 30px 0 0 0;
}


`;

export default BankInfoStyle;