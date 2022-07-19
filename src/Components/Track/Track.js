import { useState } from 'react'
import './Track.css'

function Track(props) {
    const [isRemoval, setIsRemoval] = useState(false)
    const { name, artist, album } = props.track
    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{name}</h3>
                <p>{artist} | {album}</p>
            </div>
            <button className="Track-action">
                {isRemoval ? '-' : '+'}
                {/*<!-- + or - will go here -->*/}
            </button>
        </div>
    )
}

export default Track