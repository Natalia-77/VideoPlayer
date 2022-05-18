import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import './App.css';
//import Spinner from './components/common/loader/loader';
import Owl from './components/common/owlCarousel';

function App() {
  return (
    
    // <Spinner/>
    <Owl/>
   
  );
}

export default App;
