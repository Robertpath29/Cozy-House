import { routerType } from "../types/routerType";
import AboutTheShelter from "../pages/AboutTheShelter";
import NavigateRouter from "./NavigateRouter";
import OurPets from "../pages/OurPets";


export const pages: routerType = [

    { path: "/", element: AboutTheShelter() },
    { path: "*", element: NavigateRouter({ route: "/" }) },
    { path: "/ourpets", element: OurPets() }





]



