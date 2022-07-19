import './Track.css'

function Track(props) {
    const { track, isRemoval, onAdd } = props
    const { name, artist, album } = track

    const addTrack = () => {
        onAdd(track)
    }

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{name}</h3>
                <p>{artist} | {album}</p>
            </div>
            {isRemoval ||
                <button className="Track-action" onClick={addTrack}>+</button>
            }
            {isRemoval &&
                <button className="Track-action">-</button>
            }
        </div>
    )
}

export default Track