

export interface ITeam{

    color: {
        primary: string,
        secondary:string,
        btn: string,
        btnHover: string,
        font: string,
        fontHeroTitle: string,
        fontNav:string,
        fontFooterTitle: string,
        fontFooterContact: string,
        fontBtn: string
    },
    sizes:{
        container : {maxWidthContent: string},
        site: {widthSite : string}
        title: string;
    },

    fonts: {
        mainFonts: string;
        btnFonts: string;
    }


}

declare module 'styled-components' {
    export interface DefaultTheme extends ITeam {}
  }
