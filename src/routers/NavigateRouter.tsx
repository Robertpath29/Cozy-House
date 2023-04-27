import React from 'react';
import { Navigate } from 'react-router-dom';
import { navigateTypeProps } from '../types/routerType';

const NavigateRouter: React.FC<navigateTypeProps> = ({ route }) => {
    return (
        <Navigate to={route} />
    );
};

export default NavigateRouter;