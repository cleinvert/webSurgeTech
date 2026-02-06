// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders webSurge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/webSurge/i);
    expect(titleElement).toBeInTheDocument();
});
