import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../pages/auth/login';

describe('Login Page', () => {
  it('renders login form', () => {
    render(<Login />);
    expect(screen.getByLabelText('メールアドレス')).toBeInTheDocument();
    expect(screen.getByLabelText('パスワード')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'ログイン' })).toBeInTheDocument();
  });

  it('allows user to input email and password', () => {
    render(<Login />);
    const emailInput = screen.getByLabelText('メールアドレス');
    const passwordInput = screen.getByLabelText('パスワード');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('password');
  });

  it('submits the form', () => {
    render(<Login />);
    const emailInput = screen.getByLabelText('メールアドレス');
    const passwordInput = screen.getByLabelText('パスワード');
    const loginButton = screen.getByRole('button', { name: 'ログイン' });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(loginButton);

    // ここでフォームの送信を確認するためのモック関数を使用することができます
  });
});
