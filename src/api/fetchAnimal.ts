import axios from "axios";
import { API_URL } from "./api";
import IItems from "../types/CarouselType/IItems";




export const fetchAnimal = async (pages?: number): Promise<{ data: IItems[], headers: { [key: string]: string | string[] } }> =>
    await axios.get(API_URL, {
        params: {
            _limit: 8,
            _page: pages,
        },
    });

