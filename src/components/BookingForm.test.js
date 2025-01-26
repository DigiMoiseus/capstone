import { render, screen } from '@testing-library/react';
import React from 'react';
import BookingForm from './BookingForm';

const submitForm = jest.fn();
const dispatch = jest.fn();

describe('BookingForm', () => {

    test('renders BookingForm component', () => {
        render(<BookingForm availableTimes={{ availableTimes: [] }} dispatch={dispatch} submitForm={submitForm} />);
        const headingElement = screen.getByText(/Choose Date/i);
        expect(headingElement).toBeInTheDocument();
    });

});