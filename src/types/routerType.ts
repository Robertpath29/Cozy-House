import React, { FC } from "react";


export type routerType = {
    path: string;
    element: JSX.Element | null;
}[];


export type navigateTypeProps = {
    route: string;
}