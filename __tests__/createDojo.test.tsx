import { render, screen, fireEvent } from '@testing-library/react';
import CreateDojo from '../pages/dojo/create';

describe('Create Dojo Page', () => {
  it('renders create dojo form', () => {
    render(<CreateDojo />);
    expect(screen.getByLabelText('道場名')).toBeInTheDocument();
    expect(screen.getByLabelText('場所')).toBeInTheDocument();
    expect(screen.getByLabelText('説明')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '作成' })).toBeInTheDocument();
  });

  it('allows user to input dojo details', () => {
    render(<CreateDojo />);
    const nameInput = screen.getByLabelText('道場名');
    const locationInput = screen.getByLabelText('場所');
    const descriptionInput = screen.getByLabelText('説明');

    fireEvent.change(nameInput, { target: { value: 'Test Dojo' } });
    fireEvent.change(locationInput, { target: { value: 'Tokyo' } });
    fireEvent.change(descriptionInput, {
      target: { value: 'This is a test dojo.' },
    });

    expect(nameInput.value).toBe('Test Dojo');
    expect(locationInput.value).toBe('Tokyo');
    expect(descriptionInput.value).toBe('This is a test dojo.');
  });

  it('submits the form', () => {
    render(<CreateDojo />);
    const nameInput = screen.getByLabelText('道場名');
    const locationInput = screen.getByLabelText('場所');
    const descriptionInput = screen.getByLabelText('説明');
    const createButton = screen.getByRole('button', { name: '作成' });

    fireEvent.change(nameInput, { target: { value: 'Test Dojo' } });
    fireEvent.change(locationInput, { target: { value: 'Tokyo' } });
    fireEvent.change(descriptionInput, {
      target: { value: 'This is a test dojo.' },
    });
    fireEvent.click(createButton);

    // ここでフォームの送信を確認するためのモック関数を使用することができます
  });
});
