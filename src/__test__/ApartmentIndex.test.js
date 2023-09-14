import { render, screen } from '@testing-library/react';
import ApartmentIndex from '../pages/ApartmentIndex'
import { BrowserRouter } from 'react-router-dom';
import mockApartments from '../mockApts';

describe("<ApartmentIndex />", () => {
  it ("renders profile cards", () => {
   
    render(
      <BrowserRouter>
        <ApartmentIndex apartments={mockApartments}/>, 
      </BrowserRouter>
    )
    mockApartments.forEach(apartment => {
      const apartmentName = screen.getByText(/\$1800\/month/i)
      expect(apartmentName).toBeInTheDocument()
    })
  })
})