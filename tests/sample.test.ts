import { render, screen } from '@testing-library/react';
import HomePage from '../src/pages/index';

describe('HomePage', () => {
  it('renders welcome message', () => {
    render(<HomePage />);
    const welcomeMessage = screen.getByText('Welcome to DojoConnect');
    expect(welcomeMessage).toBeInTheDocument();
  });
});
