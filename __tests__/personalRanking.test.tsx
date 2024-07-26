import { render, screen } from '@testing-library/react';
import PersonalRanking from '../pages/rankings/personal';

describe('Personal Ranking Page', () => {
  it('renders personal ranking table', () => {
    render(<PersonalRanking />);
    expect(screen.getByText('個人ランキング')).toBeInTheDocument();
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('displays ranking data', async () => {
    render(<PersonalRanking />);
    const rows = await screen.findAllByRole('row');
    expect(rows).toHaveLength(2); // ヘッダー行 + データ行
  });
});
