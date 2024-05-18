import { render, screen } from '@testing-library/react';
import { cleanup } from '@testing-library/react';

import { Loader } from '../Loader';

afterEach(() => {
  cleanup();
});

describe('Loader', () => {
  it('should render the loader', () => {
    render(<Loader loading />);

    const loader = screen.getByRole('progressbar', { name: 'Processing your request', hidden: true });
    expect(loader).toBeInTheDocument();
  });

  it('should not render the loader', () => {
    render(<Loader loading={false} />);

    const loader = screen.queryByRole('progressbar', { name: 'Processing your request', hidden: true });
    expect(loader).toBeNull();
  });
});
