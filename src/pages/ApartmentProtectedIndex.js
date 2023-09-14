import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { NavLink } from "react-router-dom"

const ApartmentProtectedIndex = ({ apartments, currentUser }) => {
  const myApartments = apartments.filter(apartment => currentUser.id === apartment.user_id)

  return (
    <>
      <div><h1>My Listings</h1></div>
      {myApartments?.map((apartment, index) => {
        return (
          <Card key={index} className='apartment-cards'>
            <CardImg top width="100%" src={apartment.image} alt="" className="apartment-picture" />
            <CardBody>
              <div className="apartment-text">
                <CardTitle><b>${apartment.price}/month</b></CardTitle>
                <CardSubtitle>{apartment.street}, {apartment.city}, {apartment.state}</CardSubtitle>
                <CardSubtitle>{apartment.bedrooms} Bedroom {apartment.bathrooms}, Bath</CardSubtitle>
              </div>
              <NavLink to={`/apartmentshow/${apartment.id}`} className="nav-link">
                <Button className='apartment-button'>More Details</Button>
              </NavLink>
            </CardBody>
          </Card>
        )
      })}
    </>
  )
}

export default ApartmentProtectedIndex