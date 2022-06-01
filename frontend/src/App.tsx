import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import './App.css';
//import Spinner from './components/common/loader/loader';
import Owl from './components/common/carousel';
import TopBar from './components/navbar/topbar';
import ContactBar from './components/navbar/contact';
import  NavbarMain from './components/navbar/navbarmain';

import ShortInfo from './components/newshomepage/news';

const App=()=> {
  return (

    // <Spinner/>    
    //<Owl/>
    <>
    <header >
    <TopBar />
      <ContactBar />
      <NavbarMain/>
      <Owl/>
      <ShortInfo/>
      
    </header>
      
    </>


  );
}

export default App;
