import { render, screen, fireEvent } from '@testing-library/react';
import Profile from '../pages/profile';
import { SessionProvider } from 'next-auth/react';

describe('Profile Page', () => {
  it('renders profile form when user is logged in', () => {
    const session = {
      user: { email: 'test@example.com', name: 'Test User' },
      expires: '1',
    };

    render(
      <SessionProvider session={session}>
        <Profile />
      </SessionProvider>
    );

    expect(screen.getByText('道場プロフィール管理')).toBeInTheDocument();
    expect(screen.getByLabelText('道場名:')).toBeInTheDocument();
    expect(screen.getByLabelText('場所:')).toBeInTheDocument();
    expect(screen.getByLabelText('説明:')).toBeInTheDocument();
  });

  it('shows login prompt when user is not logged in', () => {
    render(
      <SessionProvider session={null}>
        <Profile />
      </SessionProvider>
    );

    expect(screen.getByText('ログインしてください')).toBeInTheDocument();
  });

  it('saves profile information', async () => {
    const session = {
      user: { email: 'test@example.com', name: 'Test User' },
      expires: '1',
    };

    render(
      <SessionProvider session={session}>
        <Profile />
      </SessionProvider>
    );

    fireEvent.change(screen.getByLabelText('道場名:'), {
      target: { value: 'Test Dojo' },
    });
    fireEvent.change(screen.getByLabelText('場所:'), {
      target: { value: 'Tokyo' },
    });
    fireEvent.change(screen.getByLabelText('説明:'), {
      target: { value: 'Test Description' },
    });

    fireEvent.click(screen.getByText('保存'));

    expect(await screen.findByText('プロフィールが保存されました')).toBeInTheDocument();
  });
});
