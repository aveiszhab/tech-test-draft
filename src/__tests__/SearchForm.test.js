import React from 'react';
import { render, screen,fireEvent, wait } from '@testing-library/react';
import SearchForm from '../components/SearchForm';

describe('Searchform', () => {
  it('renders correctly to match the SearchForm snapshot', () => {
    const mockHandleSubmit = jest.fn();
    const {asFragment} = render(
      <SearchForm setSearchResultList={mockHandleSubmit}/>
    );

    expect(asFragment()).toMatchSnapshot();
  });
  
  it('renders form correctly', () => {

    const mockHandleSubmit = jest.fn();
    render(<SearchForm setSearchResultList={mockHandleSubmit}/>);
    
    const textbox = screen.getByRole('textbox');

    expect(textbox).toHaveClass('search-input');
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
    
    const button = screen.getByRole('button', {name: /go/i})

    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
    expect(button).toHaveClass('submit-button')
  });

  it('calls the onChange and onSubmit callback handler', async () => {
    
    const mockHandleSubmit = jest.fn();
    render(<SearchForm setSearchResultList={mockHandleSubmit}/>);
    
    const textbox = screen.getByRole('textbox');
    const button = screen.getByRole('button', {name: /go/i});

    fireEvent.change(textbox, {
      target: {value: 'moon'}
    });
    fireEvent.click(button);

    expect(textbox.value).toBe('moon');
    await wait(() => {
      expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
    });
  });
});