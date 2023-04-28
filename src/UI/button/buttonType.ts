import { MouseEvent } from "react";


interface IBtn {
    children?: string | JSX.Element | number;
    onClick?: (() => void);
    className?: string;
}
export default IBtn;