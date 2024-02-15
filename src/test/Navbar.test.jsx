import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

test('renders Navbar component', () => {
  render(<Navbar />);

  // You can add more assertions based on your component's behavior
  expect(screen.getByAltText('logo')).toBeInTheDocument();
  expect(screen.getByAltText('hamburger')).toBeInTheDocument();
});
