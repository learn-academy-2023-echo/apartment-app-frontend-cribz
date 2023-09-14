import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ApartmentNew from '../pages/ApartmentNew';

describe("<ApartmentNew />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ApartmentNew />
      </BrowserRouter>
    )
  })
  
  it("renders a form for our user", () => {

    
    const formStreet = screen.getByText(/street address:/i)
    expect(formStreet).toBeInTheDocument()

   

  })
 

})