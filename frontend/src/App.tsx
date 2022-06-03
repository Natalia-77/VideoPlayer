import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import './App.css';
import DefaultLayout from "./components/containers/DefaultLayout";
import HomePage from './components/home';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>          
          <Route index element={< HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
