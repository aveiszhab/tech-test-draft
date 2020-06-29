import React from 'react';
import '../styles/SearchResults.css';
import PropTypes from 'prop-types';

const SearchResults = ({results}) => {
  
  if(!results.length) {
   return <h1 className='no-result'>No result</h1>
  } else {  
  
  return(
    <div className='image-container'>
      <>
        {results.map(image =>
          <img
          key={image}
          className='image'
          src= {image}
          alt='spaceImage'
        />
        )}
      </>
    </div>
  )
        }
};

SearchResults.propTypes = {
  results: PropTypes.array.isRequired
};

export default SearchResults;