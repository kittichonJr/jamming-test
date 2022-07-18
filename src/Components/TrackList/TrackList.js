import "./TrackList.css";
import Track from "../Track/Track";

function TrackList(props) {
    const { tracks } = props;
    return (
        <div className="TrackList">
            {/* <!-- You will add a map method that renders a set of Track components  --> */}
            {tracks.map((track) => {
                return <Track key={track.id} track={track} />;
            })}
        </div>
    );
}

export default TrackList;
