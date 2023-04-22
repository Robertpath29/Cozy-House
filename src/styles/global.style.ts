import { createGlobalStyle } from "styled-components";




const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: "BehrensKursivC";
    src: url("./fonts/BehrensKursivC.ttf");
}
@font-face {
    font-family: "Mona Lisa engravedC";
    src: url("./fonts/Mona_Lisa_engravedC.ttf");
}

*{
    box-sizing: border-box;
}
body{
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.mainFonts};
    color: ${({theme})=> theme.color.font};
    
}


`;


export default GlobalStyles

