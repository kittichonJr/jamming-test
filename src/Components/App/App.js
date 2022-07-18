import './App.css';
import { useState } from 'react'
import SearchResults from '../SearchResults/SearchResults'
import data from '../../util/data';
import SearchBar from '../SearchBar/SearchBar'

function App() {
  const [searchResults, setSearchResults] = useState(data)
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App" >
        {/* <!-- Add a SearchBar component --> */}
        <SearchBar />
        < div className="App-playlist" >
          {/* <!-- Add a SearchResults component --> */}
          <SearchResults searchResults={searchResults} />
          {/* <!-- Add a Playlist component --> */}
        </div >
      </div >
    </div >);
}

export default App;
