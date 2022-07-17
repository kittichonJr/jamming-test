import { useState } from 'react'
import './Track.css'

function Track() {
    const [isRemoval, setIsRemoval] = useState(false)
    return (
        <div className="Track">
            <div className="Track-information">
                {/* <h3><!-- track name will go here --></h3> */}
                {/* <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
            </div>
            <button className="Track-action">
                {isRemoval ? '-' : '+'}
                {/*<!-- + or - will go here -->*/}
            </button>
        </div>
    )
}

export default Track