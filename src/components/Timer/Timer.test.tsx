import { render } from '@testing-library/react';
import { Timer } from './Timer';

describe('Timer', () => {
  beforeEach(() => {
    Date.now = () => 1650064440; // 15.04.2022
  });

  it('should renders correctly', () => {
    const { container } = render(<Timer onTimeIsUp={jest.fn()} />);
    expect(container).toMatchSnapshot();
  });
});
