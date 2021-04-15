import { render } from '@testing-library/react';
import { SocialMedia } from './SocialMedia';

it('should renders correctly', () => {
  const { container } = render(<SocialMedia />);
  expect(container).toMatchSnapshot();
});
