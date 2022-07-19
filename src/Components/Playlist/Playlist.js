import './Playlist.css'
import TrackList from '../TrackList/TrackList'

function Playlist(props) {
    const { playlistName, playlistTracks, onRemove } = props
    return (
        <div className="Playlist">
            <input defaultValue="New Playlist" />
            <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist