import { useEffect, useRef } from 'react'

const Cursor = () => {
    const CursorRef = useRef();
    const CursorDotRef = useRef();

    useEffect(() => {
        const handleMouseMove = (evt) => {
            const x = evt.clientX - CursorRef.current.offsetWidth / 2;
            const y = evt.clientY - CursorRef.current.offsetHeight / 2;
            const xDot = evt.clientX - CursorDotRef.current.offsetWidth / 2;
            const yDot = evt.clientY - CursorDotRef.current.offsetHeight / 2;

            const keyframes = {
                transform: `translate3d(${x}px, ${y}px, 0)`,
            };
            const dotKeyframes = {
                transform: `translate3d(${xDot}px, ${yDot}px, 0)`,
            };

            CursorRef.current.animate(keyframes, {
                duration: 1,
                easing: "ease-in-out",
                fill: "forwards",
            });
            CursorDotRef.current.animate(dotKeyframes, {
                duration: 1,
                easing: "ease-out",
                fill: "forwards",
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

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