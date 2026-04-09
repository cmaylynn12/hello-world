import { render, screen } from '@testing-library/react';
import HelloWorld from './HelloWorld';

test('renders hello world', () => {
  render(<HelloWorld />);
  expect(screen.getByText('Hello World! :D')).toBeInTheDocument();
});