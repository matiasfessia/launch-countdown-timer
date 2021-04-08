import { render } from '@testing-library/react';
import { SocialMedia } from './SocialMedia';

it('renders correctly', () => {
  const { container } = render(<SocialMedia />);
  expect(container).toMatchSnapshot();
});
