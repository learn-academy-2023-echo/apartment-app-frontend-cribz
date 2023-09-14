import React, {  useState } from "react" 
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
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [apartments, setApartments] = useState(mockApartments)


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/apartmentedit/:id" element={<ApartmentEdit />} /> 
        <Route path="/apartmentindex" element={<ApartmentIndex apartments={apartments}/>} /> 
        <Route path="/apartmentnew" element={<ApartmentNew />} /> 
        <Route path="/apartmentshow/:id" element={<ApartmentShow apartments={apartments}/>} /> 
        <Route path="/apartmentprotectedindex" element={<ApartmentProtectedIndex />} /> 
        <Route path="/signin" element={<SignIn />} /> 
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
