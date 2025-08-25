import { render, screen, fireEvent } from '@testing-library/react';
import Customers from './Customers';

test('renders customers and can view details', async () => {
  render(<Customers />);

  // Wait for axios mock (setupTests.js) to populate the list
  expect(await screen.findByText('Alice')).toBeInTheDocument();
  expect(screen.getByText('Bob')).toBeInTheDocument();

  // Click the first "Click to View Details" button
  const buttons = await screen.findAllByRole('button', { name: /click to view details/i });
  fireEvent.click(buttons[0]);

  // Details card should render with mock data
  expect(await screen.findByRole('heading', { name: /customer details/i })).toBeInTheDocument();
  expect(screen.getByText(/Name : Alice/i)).toBeInTheDocument();
});
