import { render, screen } from '@testing-library/react';
import App from '../App';
import {Provider} from '../context/context';

test('renders application name', () => {
  
  render(<Provider>
    <App />
    </Provider>);
  
  const linkElement = screen.getByText(/GekoClientApi/i);
  console.log('linkElement is=',linkElement)
  expect(linkElement).toBeDefined();
});

test ('two plus two is four', () => {
  console.log('hello from my test')
  expect(2+2).toBe(4);
});
