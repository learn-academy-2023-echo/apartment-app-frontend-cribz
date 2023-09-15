import React, { useState, useEffect } from "react"
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
  const [apartments, setApartments] = useState([mockApartments])

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user")
    if (loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser))
    }
  }, [])
  

  const location = useLocation()
  const createApartment = (apartment) => {
    // fetch("http://localhost:3000/
    console.log(apartment)
  }

  const signUp = (userInfo) => {
    fetch('http://localhost:3000/signup', {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "POST"
    })
    .then(response => {
      if(!response.ok) {
        throw Error(response.statusText)
      }
      localStorage.setItem("token", response.headers.get("Authorization"))
      return response.json()
    })
    .then(payload => {
      localStorage.setItem("user", JSON.stringify(payload))
      setCurrentUser(payload)
    })
    .catch(error => console.log("login errors: ", error))
  }

  const signIn = (userInfo) => {
    fetch('http://localhost:3000/signin', {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: "POST"
    })
    .then(response => {
      if(!response.ok) {
        throw Error(response.statusText)
      }
      localStorage.setItem("token", response.headers.get("Authorization"))
      return response.json()
    })
    .then(payload => {
      localStorage.setItem("user", JSON.stringify(payload))
      setCurrentUser(payload)
    })
    .catch(error => console.log("login errors: ", error))
  }
  
  

  const signOut = () => {
    fetch('http://localhost:3000/signout', {
    headers: {
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem("token") //retrieve the token
    },
    method: "DELETE"
  })
  .then(payload => {
    setCurrentUser(null)
    localStorage.removeItem("token")  // remove the token
    localStorage.removeItem("user")
    
  })
  .catch(error => console.log("log out errors: ", error))
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
      {/* if location doesnt equal pathname, render footer */}
      {location.pathname !== "/apartmentindex" || location.pathname !== "/myapartments" && <Footer />}
    </>
  );
}

export default App;
