import './SearchResults.css'
import TrackList from '../TrackList/TrackList'

function SearchResults(props) {
    const { searchResults } = props
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            {/* <!-- Add a TrackList component --> */}
            <TrackList tracks={searchResults} />
        </div>
    )
}

export default SearchResults