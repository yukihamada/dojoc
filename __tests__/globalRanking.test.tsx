import { render, screen } from '@testing-library/react';
import GlobalRanking from '../pages/rankings/global';

describe('Global Ranking Page', () => {
  it('renders global ranking table', () => {
    render(<GlobalRanking />);
    expect(screen.getByText('グローバルランキング')).toBeInTheDocument();
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('displays ranking data', async () => {
    render(<GlobalRanking />);
    const rows = await screen.findAllByRole('row');
    expect(rows).toHaveLength(2); // ヘッダー行 + データ行
  });
});
