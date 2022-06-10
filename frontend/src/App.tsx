import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import './App.css';
import DefaultLayout from "./components/containers/DefaultLayout";
import HomePage from './components/home';
import Weather from './components/newshomepage/weather';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>          
          <Route index element={< HomePage />} />
          <Route
            path="/weather"
            element={
              <Suspense fallback={null}>
                <Weather />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
