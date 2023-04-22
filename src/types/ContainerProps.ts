import { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    justify?: string;
    widthContent?:string;
    align?: string;
    direction?: string;
    wrap?: string;
}

export default ContainerProps