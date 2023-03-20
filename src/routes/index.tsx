import React from 'react';
import { Route, Routes } from 'react-router-dom';
//Pages
import ErrorPage from '../pages/Error';
import Home from '../pages/Home';

const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default MainRoutes;
