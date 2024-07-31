import { render, screen, fireEvent } from '@testing-library/react';
import CreateEvent from '../pages/events/create';

describe('Create Event Page', () => {
  it('renders create event form', () => {
    render(<CreateEvent />);
    expect(screen.getByLabelText('イベント名')).toBeInTheDocument();
    expect(screen.getByLabelText('日付')).toBeInTheDocument();
    expect(screen.getByLabelText('場所')).toBeInTheDocument();
    expect(screen.getByLabelText('説明')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '作成' })).toBeInTheDocument();
  });

  it('allows user to input event details', () => {
    render(<CreateEvent />);
    const nameInput = screen.getByLabelText('イベント名');
    const dateInput = screen.getByLabelText('日付');
    const locationInput = screen.getByLabelText('場所');
    const descriptionInput = screen.getByLabelText('説明');

    fireEvent.change(nameInput, { target: { value: 'Test Event' } });
    fireEvent.change(dateInput, { target: { value: '2023-10-01' } });
    fireEvent.change(locationInput, { target: { value: 'Tokyo' } });
    fireEvent.change(descriptionInput, {
      target: { value: 'This is a test event.' },
    });

    expect(nameInput.value).toBe('Test Event');
    expect(dateInput.value).toBe('2023-10-01');
    expect(locationInput.value).toBe('Tokyo');
    expect(descriptionInput.value).toBe('This is a test event.');
  });

  it('submits the form', () => {
    render(<CreateEvent />);
    const nameInput = screen.getByLabelText('イベント名');
    const dateInput = screen.getByLabelText('日付');
    const locationInput = screen.getByLabelText('場所');
    const descriptionInput = screen.getByLabelText('説明');
    const createButton = screen.getByRole('button', { name: '作成' });

    fireEvent.change(nameInput, { target: { value: 'Test Event' } });
    fireEvent.change(dateInput, { target: { value: '2023-10-01' } });
    fireEvent.change(locationInput, { target: { value: 'Tokyo' } });
    fireEvent.change(descriptionInput, {
      target: { value: 'This is a test event.' },
    });
    fireEvent.click(createButton);

    // ここでフォームの送信を確認するためのモック関数を使用することができます
  });
});
