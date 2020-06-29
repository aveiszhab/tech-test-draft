import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe('App', () => {
    it('renders correctly to match the App snapshot', () => {
        const {asFragment} = render(<App />);
  
        expect(asFragment).toMatchSnapshot();
    });

    it('renders App correctly', () => {
               
      render(<App/>);
      const image = screen.getByRole('img', {name: /nasa/i});
  
      expect(image).toHaveClass('nasa-logo');
      expect(screen.getByAltText('NASAlogo')).toBeInTheDocument();
      
      });
});