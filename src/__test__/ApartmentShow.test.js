import { render, screen } from '@testing-library/react';
import ApartmentShow from '../pages/ApartmentShow'
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import mockApartments from '../mockApts';

const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/apartmentshow/1"]}>
      <Routes>
        <Route path="/apartmentshow/:id" element={<ApartmentShow apartments={mockApartments} />} />
      </Routes>
    </MemoryRouter>
  )
}

describe("<ApartmentShow />", () => {
  it("renders single apartment", () => {
    renderShow()
    const apartmentInfo = screen.getByRole('heading', {
      name: /101 rimrock 9a 101 rimrock, san diego, ca/i
    })


  })
})
