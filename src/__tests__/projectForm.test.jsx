import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddProjectForm from '../components/AddProjectForm';

// Mock uuid so we get a predictable id in tests
jest.mock('uuid', () => ({
    v4: () => 'test-uuid-1234',
}));

describe('AddProjectForm Component', () => {
    test('renders the "Add Project" heading', () => {
        render(<AddProjectForm onProjectFormSubmit={() => {}} />);
        expect(screen.getByText('Add Project')).toBeInTheDocument();
    });

    test('renders Title and Description labels', () => {
        render(<AddProjectForm onProjectFormSubmit={() => {}} />);
        expect(screen.getByText('Title')).toBeInTheDocument();
        expect(screen.getByText('Description')).toBeInTheDocument();
    });

    test('renders an "Add" submit button', () => {
        render(<AddProjectForm onProjectFormSubmit={() => {}} />);
        expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
    });

    test('updates the Title input when typed into', () => {
        render(<AddProjectForm onProjectFormSubmit={() => {}} />);
        // Input is the first textbox in the form
        const [titleInput] = screen.getAllByRole('textbox');
        fireEvent.change(titleInput, { target: { value: 'My New Project' } });
        expect(titleInput).toHaveValue('My New Project');
    });

    test('updates the Description textarea when typed into', () => {
        render(<AddProjectForm onProjectFormSubmit={() => {}} />);
        // Textarea is the second textbox in the form
        const [, descriptionInput] = screen.getAllByRole('textbox');
        fireEvent.change(descriptionInput, { target: { value: 'A cool project' } });
        expect(descriptionInput).toHaveValue('A cool project');
    });

    test('calls onProjectFormSubmit with correct data when form is submitted', () => {
        const mockOnSubmit = jest.fn();
        render(<AddProjectForm onProjectFormSubmit={mockOnSubmit} />);

        const [titleInput, descriptionInput] = screen.getAllByRole('textbox');

        fireEvent.change(titleInput, { target: { value: 'Test Project' } });
        fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });
        fireEvent.click(screen.getByRole('button', { name: /add/i }));

        expect(mockOnSubmit).toHaveBeenCalledTimes(1);
        expect(mockOnSubmit).toHaveBeenCalledWith({
            id: 'test-uuid-1234',
            name: 'Test Project',
            description: 'Test Description',
        });
    });

    test('does not throw when onProjectFormSubmit is not provided', () => {
        render(<AddProjectForm />);
        fireEvent.click(screen.getByRole('button', { name: /add/i }));
        // No crash = test passes
    });
});
