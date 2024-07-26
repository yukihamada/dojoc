import { render, screen } from '@testing-library/react';
import LocalRanking from '../pages/rankings/local';

describe('Local Ranking Page', () => {
  it('renders local ranking table', () => {
    render(<LocalRanking />);
    expect(screen.getByText('ローカルランキング')).toBeInTheDocument();
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('displays ranking data', async () => {
    render(<LocalRanking />);
    const rows = await screen.findAllByRole('row');
    expect(rows).toHaveLength(2); // ヘッダー行 + データ行
  });
});
