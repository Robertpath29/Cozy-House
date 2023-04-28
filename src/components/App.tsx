import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { pages } from '../routers/routers';
import OneAnimal from '../pages/OneAnimal';




function App() {



  return (
    <BrowserRouter>
      <Routes>
        {
          pages.map(route => <Route path={route.path} element={route.element} key={route.path} />)
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
