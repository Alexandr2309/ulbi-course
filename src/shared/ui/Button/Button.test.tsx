import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from '../Button/Button';

describe('Button', () => {
  test('Button', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });
  test('with clear', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText(/test/i)).toHaveClass('clear');
  });
});
