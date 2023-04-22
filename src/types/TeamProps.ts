

export interface TeamProps{

    color: {
        primary: string,
        secondary:string,
        font: string,
        fontHeroTitle: string,
        fontLogo: string,
        fontFooterTitle: string,
        fontFooterContact: string,
        fontBtn: string
    },
    sizes:{
        container : {maxWidthContent: string},
        site: {widthSite : string}
    },

    fonts: {
        mainFonts: string;
        btnFonts: string;
    }


}

declare module 'styled-components' {
    export interface DefaultTheme extends TeamProps {}
  }
