import { routerType } from "../types/routerType";
import AboutTheShelter from "../pages/AboutTheShelter";
import OurPets from "../pages/OurPets";
import OneAnimal from "../pages/OneAnimal";
import { Navigate } from "react-router-dom";


export const pages: routerType = [

    { path: "/", element: <AboutTheShelter /> },
    { path: "*", element: <Navigate to={"/"} /> },
    { path: "/ourpets", element: <OurPets /> },
    { path: '/ourpets/animal/:id', element: <OneAnimal /> }

]



