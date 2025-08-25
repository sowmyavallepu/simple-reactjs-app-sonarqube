// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('shows the app header', async () => {
  render(<App />);
  // Wait for something stable in the DOM
  expect(await screen.findByText(/Simple React App/i)).toBeInTheDocument();
});
