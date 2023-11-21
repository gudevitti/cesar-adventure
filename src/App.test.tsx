import { expect, test } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('Button click should increase count', () => {
  render(<App />);
  const button = screen.getByRole('button');
  expect(button.textContent).toBe('count is 0');
  fireEvent.click(button);
  expect(button.textContent).toBe('count is 1');
});
