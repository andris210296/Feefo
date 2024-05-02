import React from 'react';
import { render, screen } from '@testing-library/react';
import { ContactDetails } from './contact-details-component';

describe('ContactDetails', () => {
    let mockData;

    beforeEach(() => {
        mockData = {
            name: 'Test Name',
            email: 'test@example.com',
            phone: '123-456-7890',
        };

        render(<ContactDetails supportContact={mockData} />);
    });

    it('renders without crashing and contains your feefo support contact', () => {
        const element = screen.getByText(/your feefo support contact/i);
        expect(element).toBeInTheDocument();
    });

    it('renders name, email, and phone correctly', () => {
        const nameElement = screen.getByText(mockData.name);
        const emailElement = screen.getByText(mockData.email);
        const phoneElement = screen.getByText(mockData.phone);

        expect(nameElement).toBeInTheDocument();
        expect(emailElement).toBeInTheDocument();
        expect(phoneElement).toBeInTheDocument();
    });
});