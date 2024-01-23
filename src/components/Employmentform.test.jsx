import { render, screen } from '@testing-library/react';
import Employmentform from './Employmentform'; // Adjust the path as necessary

test('renders the employment form', () => {
    render(<Employmentform />);
    expect(screen.getByLabelText(/First name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last name/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/Last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last name/i)).toBeInTheDocument();

});

import { fireEvent } from '@testing-library/react';

test('allows input in the first name field', () => {
    render(<Employmentform />);
    const firstNameInput = screen.getByLabelText(/First name/i);
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    expect(firstNameInput.value).toBe('John');
});

test('allows adding a new work history', () => {
    render(<Employmentform />);
    const addButton = screen.getByText(/Add another work history/i);
    fireEvent.click(addButton);
    // Check if a second work history entry is rendered
    const workHistoryEntries = screen.getAllByPlaceholderText(/Company name/i);
    expect(workHistoryEntries.length).toBe(2);
});

global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ message: 'Form submitted successfully' }),
    })
);

test('submits the form', async () => {
    render(<Employmentform />);
    const submitButton = screen.getByText(/Let's talk/i);

    // Fill in the form fields here as needed
    // ...

    fireEvent.click(submitButton);

    // Wait for expected outcome
    const successMessage = await screen.findByText(/Submission Successful!/i);
    expect(successMessage).toBeInTheDocument();
});

test('toggles the driver\'s license checkbox', () => {
    render(<Employmentform />);
    const driversLicenseCheckbox = screen.getByLabelText(/I have a driver's license/i);
    fireEvent.click(driversLicenseCheckbox);
    expect(driversLicenseCheckbox.checked).toBeTruthy();
});

test('toggles the agreement switch', () => {
    render(<Employmentform />);
    const agreementSwitch = screen.getByRole('switch');
    fireEvent.click(agreementSwitch);
    expect(agreementSwitch).toBeChecked();
});
