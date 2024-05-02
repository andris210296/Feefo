import React from 'react';
import { render, screen } from '@testing-library/react';
import { SalesInfo } from './sales-info-component';

describe('SalesInfo', () => {
    let mockData;

    beforeEach(() => {
        mockData = {
            uploads: 100,
            successfulUploads: 90,
            linesAttempted: 200,
            linesSaved: 180,
            lastUploadDate: Date.now(),
        };

        render(<SalesInfo salesOverview={mockData} />);
    });

    it('renders uploads and lines added correctly', () => {
        const uploadsElement = screen.getByText(/100 uploads/i);
        const linesAddedElement = screen.getByText(/180/i);

        expect(uploadsElement).toBeInTheDocument();
        expect(linesAddedElement).toBeInTheDocument();
    });

    it('renders percentages correctly', () => {
        const percentageElements = screen.getAllByText(/90%/i);

        expect(percentageElements).toHaveLength(2);
    });
});