import { render, screen } from '@testing-library/react';
import EventList from '../pages/events';

describe('Event List Page', () => {
  it('renders event list table', () => {
    render(<EventList />);
    expect(screen.getByText('イベント一覧')).toBeInTheDocument();
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('displays event data', async () => {
    render(<EventList />);
    const rows = await screen.findAllByRole('row');
    expect(rows).toHaveLength(2); // ヘッダー行 + データ行
  });
});
