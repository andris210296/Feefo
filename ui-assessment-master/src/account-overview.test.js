import { render, screen } from '@testing-library/react';
import AccountOverview from './account-overview';

test('renders learn react link', () => {
  const data = {
    supportContact: {
      name: 'Test Name',
      email: 'test@example.com',
      phone: '123-456-7890',
    },
    salesOverview: {
      uploads: 100,
      successfulUploads: 90,
      linesAttempted: 200,
      linesSaved: 180,
      lastUploadDate: Date.now(),
    },
  };

  render(<AccountOverview data={data} />);
  const element = screen.getByText(/Account Overview/i);
  expect(element).toBeInTheDocument();
});
