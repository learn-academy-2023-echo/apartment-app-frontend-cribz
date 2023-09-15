import { render, screen } from '@testing-library/react';
import SignUp from '../pages/SignUp'
import { BrowserRouter } from 'react-router-dom';

describe("<SignIn />", () => {
  it("renders without crashing", () => {
      render(
          <BrowserRouter>
              <SignUp />
          </BrowserRouter>
      )
      const greeting = screen.getByText("Create Your Account")
      expect(greeting).toBeInTheDocument()
  })
})