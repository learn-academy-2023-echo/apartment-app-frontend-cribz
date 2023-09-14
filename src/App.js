import React from 'react';
import mockUsers from './mockUsers';
import mockApartments from './mockApts';
import Footer from './components/Footer';
import Header from './components/Header';
import ApartmentEdit from './pages/ApartmentEdit';
import ApartmentIndex from './pages/ApartmentIndex';
import ApartmentNew from './pages/ApartmentNew';
import ApartmentProtectedIndex from './pages/ApartmentProtectedIndex';
import ApartmentShow from './pages/ApartmentShow';
import Home from './pages/Home';
import NotFound from './pages/NotFound'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import { Routes, Route } from "react-router-dom"


import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" elements={<Home />} /> 
        <Route path="/apartmentedit/:id" elements={<ApartmentEdit />} /> 
        <Route path="/apartmentindex" elements={<ApartmentIndex />} /> 
        <Route path="/apartmentnew" elements={<ApartmentNew />} /> 
        <Route path="/apartmentshow/:id" elements={<ApartmentShow />} /> 
        <Route path="/apartmentprotectedindex" elements={<ApartmentProtectedIndex />} /> 
        <Route path="/signin" elements={<SignIn />} /> 
        <Route path="/signup" elements={<SignUp />} />
        <Route path="*" elements={<NotFound />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
