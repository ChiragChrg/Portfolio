import { useEffect, useRef } from 'react'

const Cursor = () => {
    const CursorRef = useRef();
    const CursorDotRef = useRef();

    useEffect(() => {
        document.addEventListener('mousemove', evt => {
            const x = evt?.clientX - CursorRef?.current?.offsetWidth / 2;
            const y = evt?.clientY - CursorRef?.current?.offsetHeight / 2;
            const xDot = evt?.clientX - CursorDotRef?.current?.offsetWidth / 2;
            const yDot = evt?.clientY - CursorDotRef?.current?.offsetHeight / 2;

            const keyframes = {
                transform: `translate(${x}px, ${y}px)`
            }
            const DotKeyframes = {
                transform: `translate(${xDot}px, ${yDot}px)`
            }

            CursorRef?.current?.animate(keyframes, {
                duration: 500,
                easing: "ease-in-out",
                fill: "forwards",
            })
            CursorDotRef?.current?.animate(DotKeyframes, {
                duration: 1,
                easing: "ease-out",
                fill: "forwards"
            })
        })

        return document.addEventListener('mousemove', () => { })
    }, [])

    return (
        <div className="Cursor-Main">
            <div id="cursor" ref={CursorRef}>
                <div id="cursorView" className='flex'>View</div>
            </div>
            <div id="cursorDot" ref={CursorDotRef}></div>
        </div>
    )
}

export default Cursor