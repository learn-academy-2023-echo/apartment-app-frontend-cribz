import React from 'react'

const ApartmentProtectedIndex = ({ apartments, currentUser }) => {

const myApartments = apartments.filter(apartment => currentUser.id === apartment.user_id)

console.log(myApartments)

  return (
    {myApartments?.map((apartment, index) => {
      return(
          <Card key={index} className='apartment-cards'>
            <CardImg top width="100%" src={apartment.image} alt="" className="apartment-picture"/>
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
    <div>ApartmentProtectedIndex</div>
  )
}

export default ApartmentProtectedIndex