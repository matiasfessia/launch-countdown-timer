import { render } from '@testing-library/react';
import { FlipCard } from './FlipCard';

it('should renders correctly', () => {
  const { container } = render(<FlipCard title="title" value="33" />);
  expect(container).toMatchSnapshot();
});
