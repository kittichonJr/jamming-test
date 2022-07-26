import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

function Playlist(props) {
    const { playlistName, playlistTracks, onRemove, onNameChange, onSave } = props;
    const handleNameChange = (event) => {
        onNameChange(event.target.value);
    };
    return (
        <div className="Playlist" >
            <input value={playlistName} onChange={handleNameChange} />
            <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
            <button className="Playlist-save" onClick={onSave}>SAVE TO SPOTIFY</button>
        </div>
    );
}

export default Playlist;
