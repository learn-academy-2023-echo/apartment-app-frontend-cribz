import React, { useState } from "react"
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

import { Routes, Route, useLocation } from "react-router-dom"
import './App.css';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [apartments, setApartments] = useState(mockApartments)

  const location = useLocation()
  const createApartment = (apartment) => {
    // fetch("http://localhost:3000/
    console.log(apartment)
  }

  const signUp = (userInfo) => {
    console.log("sign up invoked")
  }

  const signIn = () => {
    setCurrentUser(mockUsers[1])
    console.log("Signed in")
  }

  const signOut = () => {
    setCurrentUser(null)
  }
  

  return (
    <>
      <Header currentUser={currentUser} signOut={signOut}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn signIn={signIn} />} />
        <Route path="/signup" element={<SignUp signUp={signUp}/>} />
        <Route path="/apartmentedit/:id" element={<ApartmentEdit />} />
        <Route path="/apartmentindex" element={<ApartmentIndex apartments={apartments} />} />
        <Route path="/apartmentnew" element={<ApartmentNew createApartment={createApartment}/>} />
        <Route path="/apartmentshow/:id" element={<ApartmentShow apartments={apartments} />} />
        {currentUser && (
          <Route
            path="/myapartments"
            element={<ApartmentProtectedIndex
              currentUser={currentUser}
              apartments={apartments} />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {location.pathname !== "/apartmentindex" && <Footer />}
    </>
  );
}

export default App;
