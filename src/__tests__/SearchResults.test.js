import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchResults from '../components/SearchResults';

describe('SearchResults', () => {
  it('renders correctly to match the SearchResults snapshot', () => {
    const results = ['img1']
    const {asFragment} = render(<SearchResults results = {results}/>);

    expect(asFragment).toMatchSnapshot();
  });

  it('renders SearchResult correctly', () => {
    const results = ['img1']
    
    render(<SearchResults results = {results}/>);
      const image = screen.getByRole('img');

      expect(image).toHaveClass('image');
      expect(screen.getByAltText('spaceImage')).toBeInTheDocument();
  
  });
});