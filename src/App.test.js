import { render, screen } from '@testing-library/react';

// Stub out Customers so this test doesn't run async axios logic
jest.mock('./Customers', () => () => <div data-testid="customers-stub" />);

import App from './App';

test('renders app header', () => {
  render(<App />);
  expect(screen.getByText(/Simple React App/i)).toBeInTheDocument();
});
