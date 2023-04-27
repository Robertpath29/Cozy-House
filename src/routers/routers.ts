import { routerType } from "../types/routerType";
import AboutTheShelter from "../pages/AboutTheShelter";
import NavigateRouter from "./NavigateRouter";


export const pages: routerType = [

    { path: "/", element: AboutTheShelter() },
    { path: "*", element: NavigateRouter({ route: "/" }) },





]



