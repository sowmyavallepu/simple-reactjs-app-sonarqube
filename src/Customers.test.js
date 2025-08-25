import { render, screen, fireEvent } from '@testing-library/react';
import Customers from './Customers';

test('renders customers and can view details', async () => {
  render(<Customers />);
  expect(await screen.findByText('Alice')).toBeInTheDocument();
  expect(screen.getByText('Bob')).toBeInTheDocument();

  const buttons = await screen.findAllByRole('button', { name: /click to view details/i });
  fireEvent.click(buttons[0]);

  expect(await screen.findByText(/Customer Details/i)).toBeInTheDocument();
  expect(screen.getByText(/Name : Alice/i)).toBeInTheDocument();
});
