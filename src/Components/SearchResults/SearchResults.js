import './SearchResults.css'
import TrackList from '../TrackList/TrackList'

function SearchResults(props) {
    const { searchResults, onAdd } = props
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            {/* <!-- Add a TrackList component --> */}
            <TrackList tracks={searchResults} onAdd={onAdd} isRemoval={false} />
        </div>
    )
}

export default SearchResults