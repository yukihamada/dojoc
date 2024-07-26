import { render, screen } from '@testing-library/react';
import TrainingAnalysis from '../pages/training/analysis';

describe('Training Analysis Page', () => {
  it('renders training analysis table', () => {
    render(<TrainingAnalysis />);
    expect(screen.getByText('トレーニング分析')).toBeInTheDocument();
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('displays training data', async () => {
    render(<TrainingAnalysis />);
    const rows = await screen.findAllByRole('row');
    expect(rows).toHaveLength(2); // ヘッダー行 + データ行
  });
});
