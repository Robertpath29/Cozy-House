import { useMemo } from "react";
import { getPageCount } from "../utils/getPagesCount";


export const usePages = (elem: number): number[] => {
    const pagesNumberArray: number[] = [];

    return useMemo(() => {
        const pagesCount = getPageCount(elem, 8);
        for (let x = 0; x < pagesCount; x++) {
            pagesNumberArray.push(x + 1);
        };
        return pagesNumberArray;
    }
        , [elem]);

}

