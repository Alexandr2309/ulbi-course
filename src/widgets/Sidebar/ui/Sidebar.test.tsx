import { fireEvent, screen } from '@testing-library/react';
import {
  renderWithTranslations,
} from 'shared/lib/tests/renderWithTranslations/renderWithTranslations';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('with only first param', () => {
    renderWithTranslations(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('is toggle', () => {
    renderWithTranslations(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-btn');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
