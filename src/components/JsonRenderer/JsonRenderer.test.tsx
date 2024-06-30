import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import JsonRenderer from './JsonRenderer';

test('renders hello message', () => {
	const { getByText } = render(<JsonRenderer />);
	expect(getByText('Hello from JsonRenderer!')).toBeInTheDocument();
});
