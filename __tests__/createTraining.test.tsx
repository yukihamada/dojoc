import { render, screen, fireEvent } from '@testing-library/react';
import CreateTraining from '../pages/training/create';

describe('Create Training Page', () => {
  it('renders create training form', () => {
    render(<CreateTraining />);
    expect(screen.getByLabelText('日付')).toBeInTheDocument();
    expect(screen.getByLabelText('時間')).toBeInTheDocument();
    expect(screen.getByLabelText('トレーニングの種類')).toBeInTheDocument();
    expect(screen.getByLabelText('メモ')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '記録' })).toBeInTheDocument();
  });

  it('allows user to input training details', () => {
    render(<CreateTraining />);
    const dateInput = screen.getByLabelText('日付');
    const durationInput = screen.getByLabelText('時間');
    const typeInput = screen.getByLabelText('トレーニングの種類');
    const notesInput = screen.getByLabelText('メモ');

    fireEvent.change(dateInput, { target: { value: '2023-10-01' } });
    fireEvent.change(durationInput, { target: { value: '60' } });
    fireEvent.change(typeInput, { target: { value: 'Karate' } });
    fireEvent.change(notesInput, { target: { value: 'Good session' } });

    expect(dateInput.value).toBe('2023-10-01');
    expect(durationInput.value).toBe('60');
    expect(typeInput.value).toBe('Karate');
    expect(notesInput.value).toBe('Good session');
  });

  it('submits the form', () => {
    render(<CreateTraining />);
    const dateInput = screen.getByLabelText('日付');
    const durationInput = screen.getByLabelText('時間');
    const typeInput = screen.getByLabelText('トレーニングの種類');
    const notesInput = screen.getByLabelText('メモ');
    const recordButton = screen.getByRole('button', { name: '記録' });

    fireEvent.change(dateInput, { target: { value: '2023-10-01' } });
    fireEvent.change(durationInput, { target: { value: '60' } });
    fireEvent.change(typeInput, { target: { value: 'Karate' } });
    fireEvent.change(notesInput, { target: { value: 'Good session' } });
    fireEvent.click(recordButton);

    // ここでフォームの送信を確認するためのモック関数を使用することができます
  });
});
