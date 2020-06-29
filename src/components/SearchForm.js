import React, {useState} from 'react';
import '../styles/SearchForm.css';
import getImages from '../requests/getImages'
import PropTypes from 'prop-types';

const SearchForm = ({setSearchResultList}) => {

  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setSearchText(e.target.value)
  };

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    setSearchResultList( await getImages(searchText));
    setIsLoading(false);
  }

  return (
    <>
      <form 
        className='search-form'
        onSubmit={handleSubmit}
      > 
          <input 
            className='search-input' 
            type='text'
            placeholder='Search for an image'
            onChange={handleInputChange}
          />
          
          <button 
            name='go'
            className='submit-button'
            type='submit'
          >
            Go!
          </button>    
      </form>
      {isLoading && <div className='loader'></div>}
      
    </>
  )
}

SearchForm.propTypes = {
  setSearchResultList: PropTypes.func.isRequired
};

export default SearchForm;