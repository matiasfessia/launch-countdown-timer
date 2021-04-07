import { render } from '@testing-library/react';
import { FlipCard } from './FlipCard';

it('renders correctly', () => {
  const { container } = render(<FlipCard value="33" />);
  expect(container).toMatchSnapshot();
});
