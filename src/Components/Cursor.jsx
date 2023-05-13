import { useEffect, useRef } from 'react'

const Cursor = () => {
    const CursorRef = useRef();

    useEffect(() => {
        document.addEventListener('mousemove', evt => {
            const x = evt.clientX - CursorRef.current.offsetWidth / 2;
            const y = evt.clientY - CursorRef.current.offsetHeight / 2;

            // CursorRef.current.style.top = y + "px";
            // CursorRef.current.style.left = x + "px";
            // CursorRef.current.style.setProperty("--posx", x + "px")
            // CursorRef.current.style.setProperty("--posy", x + "px")

            const keyframes = {
                transform: `translate(${x}px, ${y}px)`
            }

            CursorRef.current.animate(keyframes, {
                duration: 800,
                fill: "forwards"
            })
        })

    }, [document])

    return (
        <div className="Cursor-Main">
            <div id="cursor" ref={CursorRef}></div>
        </div>
    )
}

export default Cursor