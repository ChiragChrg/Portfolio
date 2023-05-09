import { useEffect, useRef } from 'react'

const Tracker = () => {
    const TrackRef = useRef();

    useEffect(() => {
        document.addEventListener('mousemove', evt => {
            const x = evt.clientX - 200;
            const y = evt.clientY - 200;

            TrackRef.current.style.top = y + "px";
            TrackRef.current.style.left = x + "px";
        })
    }, [document])

    return (
        <div className="Tracker-Main">
            <div id="tracker" ref={TrackRef}></div>
        </div>
    )
}

export default Tracker