import { render } from '@testing-library/react';
import { Timer } from './Timer';

it('renders correctly', () => {
  const { container } = render(<Timer />);
  expect(container).toMatchSnapshot();
});
