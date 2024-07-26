import { render, screen } from '@testing-library/react';
import Schedule from '../pages/schedule';

describe('Schedule Page', () => {
  it('renders schedule table', () => {
    render(<Schedule />);
    expect(screen.getByText('スケジュール管理')).toBeInTheDocument();
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('displays schedule data', async () => {
    render(<Schedule />);
    const rows = await screen.findAllByRole('row');
    expect(rows).toHaveLength(2); // ヘッダー行 + データ行
  });
});
