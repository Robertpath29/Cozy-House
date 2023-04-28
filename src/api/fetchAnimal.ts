import axios from "axios";
import { API_URL } from "./api";
import IItems from "../types/CarouselType/IItems";




export const fetchAnimal = async (pages?: number, id?: number): Promise<{ data: IItems[], headers: { [key: string]: string | string[] } }> =>
    await axios.get(API_URL, {
        params: {
            id:id,
            _limit: 8,
            _page: pages,
        },
    });

