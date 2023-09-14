import React from 'react'
import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { Button } from "reactstrap"

const ApartmentShow = ({ apartments }) => {
  const { id } = useParams()

  let selectedApartment = apartments?.find((apartment) => apartment.id === +id)
  return (
    <>
      <img
        alt={`profile pic of ${selectedApartment.street}`}
        src={selectedApartment.image} />
      <h3> {selectedApartment.street} {selectedApartment.unit} {selectedApartment.street}, {selectedApartment.city}, {selectedApartment.state} </h3>
      <ul>
        <li>${selectedApartment.price}</li>
        <li>{selectedApartment.square_footage} Sq Ft</li>
        <li>Bedrooms: {selectedApartment.bedrooms}</li>
        <li>Bathrooms: {selectedApartment.bathrooms}</li>
        <li>Pets: {selectedApartment.pets}</li>
      </ul>
      <NavLink to={`/apartmentedit/${selectedApartment .id}
        `} className="nav-link">
        <Button>
          Edit Apartment
        </Button>
      </NavLink>
      <NavLink to="/apartmentindex">
        <Button >
          Delete Apartment
        </Button>
      </NavLink>
    </>
  )
}

export default ApartmentShow