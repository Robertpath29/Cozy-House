import { HTMLAttributes } from "react";

interface IContainer extends HTMLAttributes<HTMLDivElement> {
    justify?: string;
    widthContent?:string;
    align?: string;
    direction?: string;
    wrap?: string;
}

export default IContainer;