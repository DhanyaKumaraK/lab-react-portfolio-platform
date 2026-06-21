import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../components/Search';

describe('Search Component', () => {
    test('renders search input with placeholder text', () => {
        render(<Search searchedTerm="" onSearchChange={() => {}} />);
        const inputElement = screen.getByPlaceholderText('Search Projects');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveValue('');
    });

    test('displays the correct searchedTerm value passed as a prop', () => {
        render(<Search searchedTerm="hail" onSearchChange={() => {}} />);
        const inputElement = screen.getByPlaceholderText('Search Projects');
        expect(inputElement).toHaveValue('hail');
    });

    test('calls onSearchChange when the input value changes', () => {
        const mockOnSearchChange = jest.fn();
        render(<Search searchedTerm="" onSearchChange={mockOnSearchChange} />);
        const inputElement = screen.getByPlaceholderText('Search Projects');

        fireEvent.change(inputElement, { target: { value: 'MOM' } });
        expect(mockOnSearchChange).toHaveBeenCalledTimes(1);
    });
});
