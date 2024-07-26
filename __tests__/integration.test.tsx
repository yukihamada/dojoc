import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../pages/auth/login';
import CreateDojo from '../pages/dojo/create';
import Schedule from '../pages/schedule';
import BookSchedule from '../pages/schedule/book';
import CreateTraining from '../pages/training/create';
import TrainingAnalysis from '../pages/training/analysis';
import CreateEvent from '../pages/events/create';
import EventList from '../pages/events';
import GlobalRanking from '../pages/rankings/global';
import LocalRanking from '../pages/rankings/local';
import PersonalRanking from '../pages/rankings/personal';

describe('User Flow Integration Test', () => {
  it('allows user to complete the main user flow', async () => {
    // ログインページ
    render(<Login />);
    fireEvent.change(screen.getByLabelText('メールアドレス'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText('パスワード'), { target: { value: 'password' } });
    fireEvent.click(screen.getByRole('button', { name: 'ログイン' }));

    // 道場プロフィール作成ページ
    render(<CreateDojo />);
    fireEvent.change(screen.getByLabelText('道場名'), { target: { value: 'Test Dojo' } });
    fireEvent.change(screen.getByLabelText('場所'), { target: { value: 'Tokyo' } });
    fireEvent.change(screen.getByLabelText('説明'), { target: { value: 'This is a test dojo.' } });
    fireEvent.click(screen.getByRole('button', { name: '作成' }));

    // スケジュール管理ページ
    render(<Schedule />);
    expect(screen.getByText('スケジュール管理')).toBeInTheDocument();

    // 予約システムページ
    render(<BookSchedule />);
    fireEvent.change(screen.getByLabelText('日付'), { target: { value: '2023-10-01' } });
    fireEvent.change(screen.getByLabelText('時間'), { target: { value: '10:00' } });
    fireEvent.change(screen.getByLabelText('イベント'), { target: { value: 'Training Session' } });
    fireEvent.click(screen.getByRole('button', { name: '予約' }));

    // トレーニング記録ページ
    render(<CreateTraining />);
    fireEvent.change(screen.getByLabelText('日付'), { target: { value: '2023-10-01' } });
    fireEvent.change(screen.getByLabelText('時間'), { target: { value: '60' } });
    fireEvent.change(screen.getByLabelText('トレーニングの種類'), { target: { value: 'Karate' } });
    fireEvent.change(screen.getByLabelText('メモ'), { target: { value: 'Good session' } });
    fireEvent.click(screen.getByRole('button', { name: '記録' }));

    // トレーニング分析ページ
    render(<TrainingAnalysis />);
    expect(screen.getByText('トレーニング分析')).toBeInTheDocument();

    // イベント作成ページ
    render(<CreateEvent />);
    fireEvent.change(screen.getByLabelText('イベント名'), { target: { value: 'Test Event' } });
    fireEvent.change(screen.getByLabelText('日付'), { target: { value: '2023-10-01' } });
    fireEvent.change(screen.getByLabelText('場所'), { target: { value: 'Tokyo' } });
    fireEvent.change(screen.getByLabelText('説明'), { target: { value: 'This is a test event.' } });
    fireEvent.click(screen.getByRole('button', { name: '作成' }));

    // イベント一覧ページ
    render(<EventList />);
    expect(screen.getByText('イベント一覧')).toBeInTheDocument();

    // グローバルランキングページ
    render(<GlobalRanking />);
    expect(screen.getByText('グローバルランキング')).toBeInTheDocument();

    // ローカルランキングページ
    render(<LocalRanking />);
    expect(screen.getByText('ローカルランキング')).toBeInTheDocument();

    // 個人ランキングページ
    render(<PersonalRanking />);
    expect(screen.getByText('個人ランキング')).toBeInTheDocument();
  });
});
