import { render, screen, fireEvent } from '@testing-library/react';
import BookSchedule from '../pages/schedule/book';

describe('Book Schedule Page', () => {
  it('renders booking form', () => {
    render(<BookSchedule />);
    expect(screen.getByLabelText('日付')).toBeInTheDocument();
    expect(screen.getByLabelText('時間')).toBeInTheDocument();
    expect(screen.getByLabelText('イベント')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '予約' })).toBeInTheDocument();
  });

  it('allows user to input booking details', () => {
    render(<BookSchedule />);
    const dateInput = screen.getByLabelText('日付');
    const timeInput = screen.getByLabelText('時間');
    const eventInput = screen.getByLabelText('イベント');

    fireEvent.change(dateInput, { target: { value: '2023-10-01' } });
    fireEvent.change(timeInput, { target: { value: '10:00' } });
    fireEvent.change(eventInput, { target: { value: 'Training Session' } });

    expect(dateInput.value).toBe('2023-10-01');
    expect(timeInput.value).toBe('10:00');
    expect(eventInput.value).toBe('Training Session');
  });

  it('submits the form', () => {
    render(<BookSchedule />);
    const dateInput = screen.getByLabelText('日付');
    const timeInput = screen.getByLabelText('時間');
    const eventInput = screen.getByLabelText('イベント');
    const bookButton = screen.getByRole('button', { name: '予約' });

    fireEvent.change(dateInput, { target: { value: '2023-10-01' } });
    fireEvent.change(timeInput, { target: { value: '10:00' } });
    fireEvent.change(eventInput, { target: { value: 'Training Session' } });
    fireEvent.click(bookButton);

    // ここでフォームの送信を確認するためのモック関数を使用することができます
  });
});
