import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    Date.now = () => 1650064440; // 15.04.2022
  });

  it('should renders correctly', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
