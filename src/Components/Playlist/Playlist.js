import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

function Playlist(props) {
    const { playlistTracks, onRemove, onNameChange } = props;
    const handleNameChange = (event) => {
        onNameChange(event.target.value);
    };
    return (
        <div className="Playlist" >
            <input defaultValue="NewPlaylist" onChange={handleNameChange} />
            <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    );
}

export default Playlist;
