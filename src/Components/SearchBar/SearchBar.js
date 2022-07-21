import './SearchBar.css';

function SearchBar(props) {
    const { onSearch } = props
    let searchTerm = '';
    const handleTermChange = (event) => {
        searchTerm = event.target.value
    }
    const handleClick = () => {
        onSearch(searchTerm)
    }
    return (
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange} />
            <button className="SearchButton" onClick={handleClick}>SEARCH</button>
        </div>
    )
}

export default SearchBar