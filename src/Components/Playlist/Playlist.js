import './Playlist.css'
import TrackList from '../TrackList/TrackList'

function Playlist(props) {
    const { playlistName, playlistTracks } = props
    return (
        <div className="Playlist">
            <input defaultValue="New Playlist" />
            {/* <!-- Add a TrackList component --> */}
            <TrackList tracks={playlistTracks} />
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist