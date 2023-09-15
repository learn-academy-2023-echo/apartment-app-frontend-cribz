import { render, screen } from '@testing-library/react';
import SignIn from '../pages/SignIn'
import { BrowserRouter } from 'react-router-dom';

describe("<SignIn />", () => {
  it("renders without crashing", () => {
      render(
          <BrowserRouter>
              <SignIn />
          </BrowserRouter>
      )
      const greeting = screen.getByText("Sign in to your account")
      expect(greeting).toBeInTheDocument()
  })
})