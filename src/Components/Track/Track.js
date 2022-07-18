import { useState } from 'react'
import './Track.css'

function Track(props) {
    const [isRemoval, setIsRemoval] = useState(false)
    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            <button className="Track-action">
                {isRemoval ? '-' : '+'}
                {/*<!-- + or - will go here -->*/}
            </button>
        </div>
    )
}

export default Track