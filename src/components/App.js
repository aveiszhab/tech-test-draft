import React, {useState} from 'react';
import '../styles/App.css';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

function App() {

const[searchResults, setSearchResults] = useState([]);
  
  return (
    <div className="App">
      <img
      className='nasa-logo'
      src='https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg'
      alt='NASAlogo'
      />
      <SearchForm 
        setSearchResultList= {setSearchResults}
      />
      <SearchResults 
        results = {searchResults}
      />  
    </div>
  );
} 

export default App;
