import React from 'react';
import { render, screen } from '@testing-library/react';
import { AccountOverviewContent } from './account-overview-content-component';

describe('AccountOverviewContent', () => {
    it('renders account overview title', () => {
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

        render(<AccountOverviewContent data={data} />);

        const element = screen.getByText(/Account Overview/i);
        expect(element).toBeInTheDocument();
    });
});