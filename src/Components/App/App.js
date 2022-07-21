import "./App.css";
import { useState, useEffect } from "react";
import SearchResults from "../SearchResults/SearchResults";
import data from "../../util/data";
import SearchBar from "../SearchBar/SearchBar";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";

const temp = [
  {
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
  },
];

function App() {
  const [searchResults, setSearchResults] = useState(data);
  const [playlistName, setPlaylistName] = useState("NewPlaylist");
  const [playlistTracks, setPlaylistTracks] = useState(temp);

  useEffect(() => {
    Spotify.getAccessToken()
  }, [])
  const addTrack = (track) => {
    if (playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    } else {
      setPlaylistTracks([track, ...playlistTracks]);
    }
  };
  const removeTrack = (track) => {
    const newPlaylistTracks = playlistTracks.filter(
      (savedTrack) => savedTrack.id !== track.id
    );
    setPlaylistTracks(newPlaylistTracks);
  };
  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };
  const savePlaylist = () => {
    const trackURIs = playlistTracks.map(track => track.uri)
    console.log(trackURIs);
  }
  const search = (search) => {
    Spotify.search(search)
      .then(res => setSearchResults(res))
  }



  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
