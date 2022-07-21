import './SearchBar.css';

function SearchBar(props) {
    const { onSearch } = props
    const handleTermChange = (event) => {
        onSearch(event.target.value)
    }
    return (
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange} />
            <button className="SearchButton">SEARCH</button>
        </div>
    )
}

export default SearchBar