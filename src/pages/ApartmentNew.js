import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'

const ApartmentNew = ({createApartment}) => {

  const [newApartment, setNewApartment] = useState({
    street: "",
    unit: "",
    city: "",
    state: "",
    square_footage: "", 
    price: "",
    bedrooms: "",
    bathrooms: "",
    pets: "",
    image: ""

  })

    const navigate = useNavigate()

    const handleChange = (e) => {
      setNewApartment({...newApartment, [e.target.name]: e.target.value})
    }

    const handleSubmit = () => {
      createApartment(newApartment)
      navigate("/apartmentindex")
    }

  return (
    <>
          <h2>New Apartment</h2>
          <Form>
            <FormGroup>
              <Label for="street">
                Street Address:
              </Label>
              <Input
                id="street"
                name="street"
                placeholder="What is your street address?"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="unit">
                Unit:
              </Label>
              <Input
                id="unit"
                name="unit"
                placeholder="What is your unit number?"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="city">
                City:
              </Label>
              <Input
                id="city"
                name="city"
                placeholder="What city?"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="state">
                State:
              </Label>
              <Input
                id="state"
                name="state"
                placeholder="What State?"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="square_footage">
                Square Footage:
              </Label>
              <Input
                id="square_footage"
                name="square_footage"
                placeholder="How many square feet?"
                type="number"
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="price">
                Price:
              </Label>
              <Input
                id="price"
                name="price"
                placeholder="Listing price?"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="bedrooms">
                Number of Bedrooms:
              </Label>
              <Input
                id="bedrooms"
                name="bedrooms"
                placeholder="How many bedrooms?"
                type="number"
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="bathrooms">
                Number of Bathrooms:
              </Label>
              <Input
                id="bathrooms"
                name="bathrooms"
                placeholder="How many bathrooms?"
                type="number"
                //increases by 0.5
                step="0.5"
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="pets">
                Pet Status:
              </Label>
              <Input
                id="pets"
                name="pets"
                placeholder="Do you have pets? If so how many and what kind?"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
      
            <FormGroup>
              <Label for="image">
                Image:
              </Label>
              <Input
                id="image"
                name="image"
                placeholder="Feel free to add an image url right here"
                type="url"
                onChange={handleChange}
              />
            </FormGroup>

            <Button onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </>
      )
    }
  


export default ApartmentNew