import './App.css';
import { useState } from 'react'
import SearchResults from '../SearchResults/SearchResults'
import data from '../../util/data';
import SearchBar from '../SearchBar/SearchBar'
import Playlist from '../Playlist/Playlist'
import Track from '../Track/Track';
import TrackList from '../TrackList/TrackList';

const temp = [{
  id: "419FKwHtnB2To6cQHVchaR",
  name: "Hello",
  artist: "KAROL G",
  album: "DJ Súbele el volumen",
  uri: "spotify:track:419FKwHtnB2To6cQHVchaR",
},
{
  id: "3fefFQgDiTe1vx1boSfhFf",
  name: "Hello mama",
  artist: "TaitosmitH",
  album: "Hello mama",
  uri: "spotify:track:3fefFQgDiTe1vx1boSfhFf",
},
{
  id: "7snRPf9l4LRCMV3hD8WD3W",
  name: "Hello",
  artist: "SEVENTEEN",
  album: "SEVENTEEN 2ND ALBUM 'TEEN, AGE'",
  uri: "spotify:track:7snRPf9l4LRCMV3hD8WD3W",
}]

function App() {
  const [searchResults, setSearchResults] = useState(data)
  const [playlistName, setPlaylistName] = useState('MyPlaylist');
  const [playlistTracks, setPlaylistTracks] = useState(temp);
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App" >
        <SearchBar />
        < div className="App-playlist" >
          <SearchResults searchResults={searchResults} />
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks} />
        </div >
      </div >
    </div >);
}

export default App;
